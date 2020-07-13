import React, { Component } from 'react';
import './App.css';
import CoursesList from './components/courses-list';
import CoursesFilters from './components/courses-filters';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      coursesData: [],
      coursesDataFiltered: [],
      subjectsData: []
    };
  }

  componentDidMount() {
    fetch("http://krapipl.imumk.ru:8082/api/mobilev1/update", {
      method: 'POST',
      body: JSON.stringify({'data':''})
    })
    .then(res => res.json())
    .then(
      (result) => {
        // получаем все предметы
        const subjects = result.items.map(item => item.subject);
        const subjectsFiltered = subjects.filter((item, index) => subjects.indexOf(item) === index);

        // получаем все жанры
        const genres = result.items.map(item => item.genre);
        const genresFiltered = genres.filter((item, index) => genres.indexOf(item) === index);
        // console.log(genresFiltered);

        // получаем все классы
        const grades = result.items.map(item => item.grade);
        const gradesFiltered = grades.filter((item, index) => grades.indexOf(item) === index);
        // console.log(gradesFiltered);

        // console.log(result.items);

        this.setState({
          isLoaded: true,
          coursesData: result.items,
          coursesDataFiltered: result.items,
          subjectsData: subjectsFiltered,
        });

      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  onSubjectChange = ({filter, coursesData}) => {
    if (filter == "DEFAULT") {
      this.setState({
        coursesData
      })
    } else {
      let coursesDataFiltered = this.state.coursesData;

      coursesDataFiltered = coursesDataFiltered
            .filter(item => item.subject == filter);
  
      this.setState({
        coursesDataFiltered
      })
  
  
      // this.setState(({ coursesData }) => {
      //   let coursesDataFiltr = coursesData.slice()
      //         .filter(item => item.subject == filter);
   
      //   return {
      //     coursesData: coursesDataFiltr,
      //   };
      // });
    }
  };

  render() {
    const { error, isLoaded, coursesData, subjectsData, coursesDataFiltered } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="container">
          <h1>Витрина</h1>
          <CoursesFilters 
          subjects={subjectsData} 
          onSubjectChange={(data) => this.onSubjectChange(data)} 
          />
          <CoursesList courses={coursesDataFiltered} />
        </div>
      );
    }
  }
}
