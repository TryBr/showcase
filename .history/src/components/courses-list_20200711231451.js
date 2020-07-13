import React, { Component } from 'react';

import CoursesListItem from '../components/courses-list-item';

export default class CoursesList extends Component {
    
    render() {   
        const { courses, coursesDataFiltered } = this.props.courses;
        if (coursesDataFiltered) {
            console.log("exist");
            console.log(coursesDataFiltered);
        }  else {
            console.log("not exist");
            console.log(coursesDataFiltered);
        }  
        return(
            <ul className="courses-list">
                {courses.map((item) => (
                    <CoursesListItem
                    key={item.courseId}
                    courseId={item.courseId}
                    courseTitle={item.title}
                    courseGrade={item.grade}
                    courseGenre={item.genre}
                    courseShopUrl={item.shopUrl}
                    coursePrice={item.price}
                    />
                ))}
            </ul>
        )
    }
}