import React, { Component } from 'react';
import showCaseItemImg from '../showcase-item-img.jpeg';

import CoursesListItem from '../components/courses-list-item';

export default class CoursesList extends Component {
    render() {
        return(
            <ul className="courses-list">
                <CoursesListItem />
            </ul>
        )
    }
}