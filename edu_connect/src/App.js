import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Путь к компоненту Header
import Footer from './components/Footer'; // Подключаем Footer
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
import VacanciesPage from './components/VacanciesPage';
import CoursesPage from './components/CoursesPage';
import CourseDetails from './components/CourseDetails';
import AdminPage from './components/AdminPage';
import RegisterPage from './components/RegisterPage'; 
import LoginPage from './components/LoginPage' 
import ForumPage from './components/ForumPage';



function App() {
  return (
    <Router>
      <Header /> {/* Шапка будет отображаться на всех страницах */}
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        {/* Контент занимает всё пространство кроме шапки и подвала */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/forum" element={<ForumPage />} /> {/* Добавляем маршрут для форума */}

        </Routes>
      </div>
      <Footer /> {/* Подвал будет отображаться на всех страницах */}
    </Router>
  );
}

export default App;
