import React, { useState } from "react";
import '../styles/Admin.css';

const AdminPanel = ({ onAddCourse }) => {
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    fullDescription: "",
    features: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddClick = () => {
    const course = {
      id: Date.now(),
      title: newCourse.title,
      description: newCourse.description,
      fullDescription: newCourse.fullDescription,
      features: newCourse.features.split(",").map((feature) => feature.trim()),
    };
    onAddCourse(course);
    setNewCourse({
      title: "",
      description: "",
      fullDescription: "",
      features: "",
    });
  };

  return (
    <div className="admin-panel">
      <h2>Добавить новый курс</h2>
      <input
        type="text"
        name="title"
        placeholder="Название курса"
        value={newCourse.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Краткое описание"
        value={newCourse.description}
        onChange={handleInputChange}
      />
      <textarea
        name="fullDescription"
        placeholder="Полное описание"
        value={newCourse.fullDescription}
        onChange={handleInputChange}
      ></textarea>
      <input
        type="text"
        name="features"
        placeholder="Особенности (через запятую)"
        value={newCourse.features}
        onChange={handleInputChange}
      />
      <button onClick={handleAddClick}>Добавить курс </button>
    </div>
  );
};

export default AdminPanel;