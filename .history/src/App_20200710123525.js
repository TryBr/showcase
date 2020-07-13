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

        // subjects.filter((item, index) => subjects.indexOf(item) === index);

        // const uniqueArray = subjects.filter(function(item, pos) {
        //     return subjects.indexOf(item) == pos;
        // })

        console.log(subjectsFiltered);
        // console.log(uniqueArray);

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
          <CoursesList courses={ coursesData }/>
        </div>
        // <ul>
        //   {data.map(item => (
        //     <li key={item.courseId}>
        //       {item.title}
        //     </li>
        //   ))}
        // </ul>
      );
    }
  }
}
