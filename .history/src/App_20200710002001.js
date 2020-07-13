import React, { Component } from 'react';
import './App.css';
// import showCaseItemImg from './showcase-item-img.jpeg';

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
          <ul className="courses-list">
            <li className="courses-sci">
              <div className="sci-figure">
                <img src="" alt="Демо-версия" />
              </div>
              <div className="sci-info">
                <p className="sci-title">Демо-версия</p>
                <p className="sci-grade">5-11 классы</p>
                <p className="sci-genre">Демо</p>
                <p className="sci-meta"><a href="/offer/9023">Подробнее</a></p>
                <p className="sci-controls">
                  <a href="#" className="pure-button pure-button-primary btn-fluid">Попробовать</a>
                </p>
              </div>
            </li>
          </ul>
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
