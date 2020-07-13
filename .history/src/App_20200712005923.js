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
      subjectsData: [],
      genres: [],
      grades: []
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
        const gradesFiltered = grades.filter((item, index) => grades.indexOf(item) === index).sort();
        // console.log(gradesFiltered);

        // console.log(result.items);

        this.setState({
          isLoaded: true,
          coursesData: result.items,
          coursesDataFiltered: result.items,
          subjectsData: subjectsFiltered,
          genres: genresFiltered,
          grades: gradesFiltered
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

  onSubjectChange = (filter) => {
    console.log(filter);
    // if (filter == "DEFAULT") {
    //   this.setState(({ coursesData }) => {
    //     return {
    //       coursesDataFiltered: coursesData
    //     };
    //   });
    // } else {
    //   let coursesDataFiltered = this.state.coursesData;

    //   coursesDataFiltered = coursesDataFiltered
    //         .filter(item => item.subject == filter);

    //   this.setState({
    //     coursesDataFiltered
    //   })
    // }
  };

  render() {
    const { error, isLoaded, coursesData, subjectsData, genres, grades, coursesDataFiltered } = this.state;
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
          genres={genres} 
          grades={grades}
          onSubjectChange={(data) => this.onSubjectChange(data)} 
          />
          <CoursesList courses={coursesDataFiltered} />
        </div>
      );
    }
  }
}
