import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Путь к компоненту Header
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
import VacanciesPage from './components/VacanciesPage';
import CoursesPage from './components/CoursesPage';

function App() {
  return (
    <Router>
      <Header /> {/* Шапка будет отображаться на всех страницах */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
