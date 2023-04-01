import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    console.log("printing data: ", courses.data);
    const [likedCourses, setLikedCourses] = useState([]);

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
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map( (course) => {
                return (
                    <Card 
                    key={course.id} 
                    course={course} 
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses} />
                )
            })
        }

        </div>
    )
}

export default Cards; 