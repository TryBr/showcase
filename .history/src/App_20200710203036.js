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

  onSubjectChange = (filter) => {
    this.setState(state => {
      const coursesDataFiltered = coursesData.slice()
            .filter(item => item.subject == filter);
 
      return {
        coursesData: coursesDataFiltered,
      };
    });
  };

  render() {
    const { error, isLoaded, coursesData, subjectsData } = this.state;
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
          <CoursesList courses={coursesData}/>
        </div>
      );
    }
  }
}
