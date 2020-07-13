import React, { Component } from 'react';
import './app.css';
// import CoursesList from '../courses-list';
// import CoursesFilters from '../courses-filters';
// import Spinner from '../spinner';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      isFiltered: false,
      priceType: 'RUB',
      coursesData: [],
      coursesDataFiltered: [],
      subjects: [],
      genres: [],
      grades: [],
      filterSubject: '',
      filterGenre: '',
      filterGrade: ''
    };
  }

  
}
