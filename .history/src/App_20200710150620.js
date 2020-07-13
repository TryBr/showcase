import React, { Component } from 'react';
import './App.css';
import CoursesList from './components/courses-list';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      coursesData: [],
      subjects: []
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
        // console.log(subjectsFiltered);

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

  render() {
    const { error, isLoaded, coursesData } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="container">
          <h1>Витрина</h1>
          <div className="courses u-mt-30">
            <form className="courses-form form" id="filterform" role="form">
                <div>
                    <select id="subj" name="subj">
                        <option value="">Все предметы</option>
                        <option>Алгебра</option>
                        <option>Английский язык</option>
                        <option>Биология</option>
                        <option>География</option>
                        <option>Геометрия</option>
                        <option>Демо-версия</option>
                        <option>Информатика</option>
                        <option>История</option>
                        <option>Литература</option>
                        <option>Математика</option>
                        <option>Обществознание</option>
                        <option>Окружающий мир</option>
                        <option>Робототехника</option>
                        <option>Русский язык</option>
                        <option>Физика</option>
                        <option>Химия</option>
                    </select>
                </div>
                <div>
                    <select id="genre" name="genre">
                        <option value="">Все жанры</option>
                            <option>Демо</option>
                            <option>Задачник</option>
                            <option>Подготовка к ВПР</option>
                            <option>Подготовка к ЕГЭ</option>
                            <option>Рабочая тетрадь</option>
                    </select>
                </div>
                <div>
                    <select id="grade" name="grade" onchange="filterform.submit()">
                        <option value="">Все классы</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option selected="">11</option>
                    </select>
                </div>
                <div>
                    <input className="borderFind" type="text" placeholder="Поиск" id="search" name="search" value="" />
                    <button className="courses-form-search-btn" type="submit" title="Найти"></button>
                </div>
            </form>
          </div>
          <CoursesList courses={ coursesData }/>
        </div>
      );
    }
  }
}
