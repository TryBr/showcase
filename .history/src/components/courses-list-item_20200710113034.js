import React, { Component } from 'react';
import showCaseItemImg from '../showcase-item-img.jpeg';

export default class CoursesListItem extends Component {
    render() {
        return(
            <li id={this.props.index} className="courses-sci">
                <div className="sci-figure">
                <img src={showCaseItemImg} alt="Демо-версия" />
                </div>
                <div className="sci-info">
                <p className="sci-title">{this.props.courseTitle}</p>
                <p className="sci-grade">{this.props.courseGrade} класс</p>
                <p className="sci-genre">{this.props.courseGenre}</p>
                <p className="sci-meta"><a href={this.props.courseShopUrl}>Подробнее</a></p>
                <p className="sci-controls">
                    <a href="#" className="pure-button pure-button-primary btn-fluid">{this.props.coursePrice}</a>
                </p>
                </div>
            </li>
        )
    }
}