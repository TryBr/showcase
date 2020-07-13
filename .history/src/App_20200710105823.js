import React, { Component } from 'react';
import './App.css';
import CoursesList from './components/courses-list';


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
    fetch("http://krapipl.imumk.ru:8082/api/mobilev1/update", {
      method: 'POST',
      body: JSON.stringify({'data':''})
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          data: result.items
        });
        console.log(result);
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="container">
          <h1>Витрина</h1>
          <CoursesList></CoursesList>
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
