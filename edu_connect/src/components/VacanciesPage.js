import React, { useState, useEffect } from 'react';
import "../styles/VacanciesPage.css"; // Подключение CSS стилей

// Компоненты фильтра и карточки вакансии
import FilterPanel from './FilterPanel';
import VacancyCard from './VacancyCard';

const VacanciesPage = () => {
  const [vacancies, setVacancies] = useState([
    { title: "Frontend Developer", company: "Tech Corp", location: "Москва", jobType: "Полная занятость", description: "Разработка и поддержка интерфейсов" },
    { title: "UI/UX Designer", company: "Creative Studio", location: "Санкт-Петербург", jobType: "Стажировка", description: "Дизайн и прототипирование интерфейсов" },
    { title: "React Developer", company: "Innovate Ltd.", location: "Казань", jobType: "Частичная занятость", description: "Создание веб-приложений на React" }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({ location: '', jobType: '', company: '' });
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Получение уникальных компаний для выпадающего списка
    const uniqueCompanies = [...new Set(vacancies.map(vacancy => vacancy.company))];
    setCompanies(uniqueCompanies);
  }, [vacancies]);

  // Фильтрация вакансий
  const filteredVacancies = vacancies.filter((vacancy) => {
    return (
      vacancy.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedFilters.location ? vacancy.location === selectedFilters.location : true) &&
      (selectedFilters.jobType ? vacancy.jobType === selectedFilters.jobType : true) &&
      (selectedFilters.company ? vacancy.company === selectedFilters.company : true)
    );
  });

  // Обработчик изменения поискового термина
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Обработчик изменения фильтров
  const handleFilterChange = (filterName, value) => {
    setSelectedFilters({ ...selectedFilters, [filterName]: value });
  };

  return (
    <div className="vacancies-page">
      <h1 style={{ textAlign: 'center' }}>Маркетплейс вакансий и стажировок</h1>
      <p style={{ textAlign: 'center' }}>Интегрированная система поиска работы с возможностью прямого взаимодействия между студентами и работодателями.</p>

      {/* Панель фильтров */}
      <FilterPanel
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        companies={companies} // Передача списка компаний в компонент
      />

      {/* Поиск вакансий */}
      <input
        type="text"
        placeholder="Поиск по вакансиям и стажировкам..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="vacancies-search"
      />

      {/* Список вакансий */}
      <div className="vacancies-list">
        {filteredVacancies.length > 0 ? (
          filteredVacancies.map((vacancy, index) => (
            <VacancyCard key={index} vacancy={vacancy} />
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>Нет подходящих вакансий.</p>
        )}
      </div>
    </div>
  );
};

export default VacanciesPage;