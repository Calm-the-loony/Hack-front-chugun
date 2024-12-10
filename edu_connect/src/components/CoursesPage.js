// App.js
import React, { useState } from "react";
import CourseDetails from "./CourseDetails";
import CourseTasks from "./CourseTasks";
import AdminPanel from "./AdminPanel"; // Импорт панели администратора
import WebinarSection from "./WebinarSection";
import '../styles/CoursesPage.css';

const CoursesPage = () => {
    const [courses, setCourses] = useState([
        {
          id: 1,
          title: "Основы программирования",
          description: "Изучите основы алгоритмов, циклов и структур данных.",
          fullDescription: "Полное описание курса о том, как строятся программы, базовые алгоритмы и структуры данных.",
          theory: "Теоретическая часть: Обзор языков программирования, основы синтаксиса и компиляции.",
          features: ["Персонализированное обучение", "Онлайн-вебинары", "Аналитика успеваемости"],
        },
        {
          id: 2,
          title: "Frontend-разработка",
          description: "Научитесь создавать современные веб-приложения.",
          fullDescription: "Полное описание курса о веб-разработке, включая HTML, CSS, JavaScript и React.",
          theory: "Теоретическая часть: Основы веб-технологий, DOM, CSS-верстка и основы JavaScript.",
          features: ["Интерактивные задания", "Видео-лекции", "Практические проекты"],
        },
      ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    setSelectedCourse(null);
  };

  const handleTaskClick = (course) => {
    setSelectedTask(course);
  };

  const handleBackToCourses = () => {
    setSelectedTask(null);
  };

  const handleAddCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <div className="courses-page">
      {!selectedCourse && !selectedTask ? (
        <>
          <h1 className="page-title">Курсы</h1>
          {isAdmin && <AdminPanel onAddCourse={handleAddCourse} />}
          <div className="courses-list">
            {courses.map((course) => (
              <div className="course-card" key={course.id} onClick={() => handleCourseClick(course)}>
                <h2 className="course-title">{course.title}</h2>
                <p className="course-description">{course.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : selectedCourse && !selectedTask ? (
        <CourseDetails course={selectedCourse} onBack={handleBack} onStart={handleTaskClick} />
      ) : (
        <CourseTasks course={selectedCourse} onBack={handleBackToCourses} />
      )}
    </div>
  );
};

export default CoursesPage;