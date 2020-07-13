import React, { Component } from 'react';
import './App.css';
import CoursesList from './components/courses-list';

import CoursesService from './services/courses-service';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    // CoursesService.getCourses();
  }

  render() {
    return (
      <div></div>
    );
    // const { error, isLoaded, data } = this.state;
    // if (error) {
    //   return <div>Ошибка: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Загрузка...</div>;
    // } else {
    //   return (
    //     <div className="container">
    //       <h1>Витрина</h1>
    //       <CoursesList></CoursesList>
    //     </div>
    //     // <ul>
    //     //   {data.map(item => (
    //     //     <li key={item.courseId}>
    //     //       {item.title}
    //     //     </li>
    //     //   ))}
    //     // </ul>
    //   );
    // }
  }
}
