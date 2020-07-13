import React, { Component } from 'react';

import CoursesListItem from '../courses-list-item';

export default class CoursesList extends Component {
    
    render() {   
        const { courses, priceType } = this.props;     
        return(
            <ul className="courses-list row">
                {courses.map((course) => (

                    <CoursesListItem
                    key={course.courseId}
                    course={course}
                    priceType={priceType}
                    />
                ))}
            </ul>
        )
    }
}