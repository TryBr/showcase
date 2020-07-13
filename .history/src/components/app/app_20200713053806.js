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

        // получаем все классы
        const grades = result.items.map(item => item.grade);
        const gradesFiltered = grades.filter((item, index) => grades.indexOf(item) === index).sort();

        this.setState({
          isLoaded: true,
          coursesData: result.items,
          coursesDataFiltered: result.items,
          subjects: subjectsFiltered,
          genres: genresFiltered,
          grades: gradesFiltered
        });

        // console.log(result.items);

      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  changeFilterSubject = (filter) => {
    this.setState({filterSubject: filter});
    this.onChangeFilter("subject", filter);
  };

  changeFilterGenre = (filter) => {
    this.setState({filterGenre: filter});
    this.onChangeFilter("genre", filter);
  };

  changeFilterGrade = (filter) => {
    this.setState({filterGrade: filter});
    this.onChangeFilter("grade", filter);
  };

  changeFilterSearch = (term) => {
    let coursesData = this.state.coursesData.slice();
    coursesData = coursesData.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });

    this.setState({
      coursesDataFiltered: coursesData,
      isFiltered: true
    });

    if (term.length === 0) {
      this.setState({
        isFiltered: false
      });
    }
  }

  changePrice = (priceType) => {
    if (priceType === 'RUB') {
      this.setState({
        priceType: 'RUB'
      });
    } else {
      this.setState({
        priceType: 'BONUS'
      });
    }
  }

  onChangeFilter = (type, filter) => {
    let coursesData = this.state.coursesData.slice();

    switch(type) {
      case 'subject':       
          coursesData = coursesData.filter(item => item.subject.toLowerCase() === filter.toLowerCase());
          this.setState({
            coursesDataFiltered: coursesData,
            isFiltered: true
          });
          break;
    
      case 'genre': 
          coursesData = coursesData.filter(item => item.genre.toLowerCase() === filter.toLowerCase());
          this.setState({
            coursesDataFiltered: coursesData,
            isFiltered: true
          });
          break;

      case 'grade':
          coursesData = coursesData.filter(item => item.grade.toLowerCase() === filter.toLowerCase());
          this.setState({
            coursesDataFiltered: coursesData,
            isFiltered: true
          });
          break;
    
      default:
          this.setState({
            coursesDataFiltered: this.state.coursesData,
            isFiltered: false
          });
          break;
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Витрина</h1>


      </div>
    );
  }
}
