import React, { Component } from 'react';
import showCaseItemImg from '../showcase-item-img.jpeg';

export default class CoursesListItem extends Component {
    render() {
        return(
            <li key={this.props.courseId} className="courses-sci">
                <div className="sci-figure">
                <img src={showCaseItemImg} alt="Демо-версия" />
                </div>
                <div className="sci-info">
                <p className="sci-title">{this.props.courseTitle}</p>
                <p className="sci-grade">{this.props.courseGrade}</p>
                <p className="sci-genre">{this.props.courseGenre} класс</p>
                <p className="sci-meta"><a href="/offer/9023">Подробнее</a></p>
                <p className="sci-controls">
                    <a href="#" className="pure-button pure-button-primary btn-fluid">Попробовать</a>
                </p>
                </div>
            </li>
        )
    }
}