import React, { Component } from 'react';

import CoursesListItem from '../components/courses-list-item';

export default class CoursesList extends Component {
    
    render() {   
        const { courses, coursesDataFiltered } = this.props.courses;
        if (!coursesDataFiltered) {
            return(
                <ul className="courses-list">
                    111
                </ul>
            )
        }  else {
            return(
                <ul className="courses-list">
                    222
                </ul>
            )
        }  
    }
}