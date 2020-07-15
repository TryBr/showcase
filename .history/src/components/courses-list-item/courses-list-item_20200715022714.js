import React, { Component } from 'react';
import showCaseItemImg from '../../showcase-item-img.jpeg';

export default class CoursesListItem extends Component {
    render() {
        const { course, priceType } = this.props;
        const imageUrl = "https://www.imumk.ru/svc/coursecover/" + course.courseId;
        return(
            <li className="col-md">
                <div className="course-item">
                    <div className="item-photo">
                        <img className="photo__img" src={imageUrl ? imageUrl : showCaseItemImg} alt={course.title} />
                    </div>
                    <div className="item-info">
                        <p className="info-title">{course.title}</p>
                        <p className="info-grade">{course.grade} класс</p>
                        <p className="info-genre">{course.genre}</p>
                        <p className="info-meta"><a href={course.shopUrl}>Подробнее</a></p>
                        <p className="info-controls">
                            <a href={course.shopUrl} className="button">
                                {priceType === 'RUB' ? course.price + ' рублей' : course.priceBonus + ' бонусов'}
                            </a>
                        </p>
                    </div>
                </div>
            </li>
        )
    }
}