import React from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    console.log("printing data: ", courses.data);

    function getCourses() {
        let allCourse = [];
        Object.values(courses).forEach( array => {
            array.forEach( courseData => {
                allCourse.push(courseData);
            })
        })
        return allCourse;
    }

    return (
        <div>
        {
            getCourses().map( (course) => {
                return (
                    <Card key={course.id} course={course} />
                )
            })
        }

        </div>
    )
}

export default Cards; 