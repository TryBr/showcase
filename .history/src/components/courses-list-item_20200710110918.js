import React, { Component } from 'react';
import showCaseItemImg from '../showcase-item-img.jpeg';

export default class CoursesListItem extends Component {
    render() {
        return(
            <li className="courses-sci" key={this.props.courseId}>
                <div className="sci-figure">
                <img src={showCaseItemImg} alt="Демо-версия" />
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
        )
    }
}