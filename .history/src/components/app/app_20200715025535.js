import React, { Component } from 'react';
import CoursesList from '../courses-list';
import CoursesFilters from '../courses-filters';
import Spinner from '../spinner';
import './app.css';


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
      filters: [],
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
        const gradesFiltered = grades.map(item => {
          if (item.indexOf(';') + 1) {
            item = item.split(';');
            return item[0];
          } else {
            return item;
          }
        });
        const gradesFilteredNew = gradesFiltered.filter((item, index) => {
          return gradesFiltered.indexOf(item) === index;
        });
        gradesFilteredNew.sort(function(a, b) {
          return a - b;
        });

        console.log(result.items);
      
        this.setState({
          isLoaded: true,
          coursesData: result.items,
          coursesDataFiltered: result.items,
          subjects: subjectsFiltered,
          genres: genresFiltered,
          grades: gradesFilteredNew
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


  onFilterChange = (type, filter) => {
    
    let coursesData;
    coursesData = this.state.coursesData.slice();

    if (filter === 'DEFAULT') {
      this.setState({
        coursesDataFiltered: this.state.coursesData,
        isFiltered: false
      });

    } else {
      switch(type) {
        case 'subject':       
            coursesData = coursesData.filter(item => item.subject.toLowerCase() === filter.toLowerCase());
            this.setState({
              coursesDataFiltered: coursesData,
              isFiltered: true,
            });
            break;
      
        case 'genre': 
            coursesData = coursesData.filter(item => item.genre.toLowerCase() === filter.toLowerCase());
            this.setState({
              coursesDataFiltered: coursesData,
              isFiltered: true,
            });
            break;
  
        case 'grade':
            coursesData = coursesData.filter(item => {
              let gradesArray = [];
              if (item.grade.indexOf(';') + 1) {
                let grades = item.grade.split(';');
                grades.forEach(function(grade) {
                  console.log("grade - " + grade);
                  if ((grade == filter) && (grade.toLowerCase() == filter.toLowerCase())) {
                    gradesArray.push(item);
                  }
                });
                return item;
              } else {
                return item.grade.toLowerCase() === filter.toLowerCase();
              }
            });
            console.log(coursesData);
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
    }
  }

  render() {
    const { error, isLoaded, subjects, genres, grades,
            coursesDataFiltered, isFiltered, priceType } = this.state;
    
    if (error) {
      return (
        <div className="container">
          <h1>Витрина</h1>

          <Spinner />

          <div className="alert alert-danger error-message" role="alert">
            Ошибка. Данные не загружены: <br />
            {error.message}
          </div>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="container">
          <h1>Витрина</h1>

          <Spinner />
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>Витрина</h1>

          <CoursesFilters 
          subjects={subjects}
          genres={genres} 
          grades={grades}
          
          changeFilterSearch={(data) => this.changeFilterSearch(data)}
          changePrice={(data) => this.changePrice(data)}
          onFilterChange={(type, filter) => this.onFilterChange(type, filter)}
          />

          <h2 className={isFiltered ? 'search-result-title' : 'search-result-title hidden'}>Результаты поиска:</h2>

          <h3 className={coursesDataFiltered.length === 0 ? 'search-empty-title' : 'search-empty-title hidden'}>Курсы не найдены</h3>


          <CoursesList courses={coursesDataFiltered} priceType={priceType} />
        </div>
      );
    }
  }
}
