import React, { Component } from 'react';
import './App.css';
import CoursesList from './components/courses-list';
import CoursesFilters from './components/courses-filters';


export default class App extends Component {
  constructor(props) {
    super(props);
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

  onFilterChange = (filter) => {
    // this.setState({ filter });
    console.log(filter);
  };

  render() {
    const { error, isLoaded, coursesData, subjectsData } = this.state;
    console.log(subjectsData);
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="container">
          <h1 onClick={() => this.onFilterChange('Алгебра')}>Витрина</h1>
          <CoursesFilters subjects={subjectsData} />
          <CoursesList courses={coursesData}/>
        </div>
      );
    }
  }
}
