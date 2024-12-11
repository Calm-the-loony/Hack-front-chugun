import React, { useState } from "react";
import '../styles/CoursesPage.css';

const CourseDetails = ({ course, onBack, onStart }) => {
    const [isEnrolled, setIsEnrolled] = useState(false);
  
    const handleEnroll = () => {
      setIsEnrolled(true);
      onStart(course);
    };
  
    return (
      <div className="course-details">
        <button className="back-button" onClick={onBack}>
          Назад к курсам
        </button>
        <h2 className="course-title">{course.title}</h2>
        <p>{course.fullDescription}</p>
        <ul>
          {course.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {course.theory && (
          <div className="theory-material">
            <h3>Теоретический материал</h3>
            <p>{course.theory}</p>
          </div>
        )}
        {!isEnrolled ? (
          <button className="enroll-button" onClick={handleEnroll}>
            Записаться
          </button>
        ) : (
          <p>Вы записаны на курс. Перейдите к заданиям.</p>
        )}
      </div>
    );
  };
  

export default CourseDetails;
