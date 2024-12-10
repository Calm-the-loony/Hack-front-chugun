import React from 'react';

const VacancyCard = ({ vacancy }) => {
  return (
    <div className="vacancy-card">
      <h2>{vacancy.title}</h2>
      <p><strong>Компания:</strong> {vacancy.company}</p>
      <p><strong>Местоположение:</strong> {vacancy.location}</p>
      <p><strong>Тип работы:</strong> {vacancy.jobType}</p>
      <p>{vacancy.description}</p>
      <button className="apply-button">Подать заявку</button>
    </div>
  );
};

export default VacancyCard;
