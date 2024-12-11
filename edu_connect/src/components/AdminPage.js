import { useEffect, useState } from "react";
import "../styles/ProfilePage.css";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",  // Почта будет строкой
    avatar: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      const parsedData = JSON.parse(data);
      setUserData(parsedData); // Устанавливаем данные пользователя в состояние
    }
  }, []);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevState) => ({
          ...prevState,
          avatar: reader.result, // Обновляем аватар
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return (
          <>
            <h2>Студенты</h2>
            <div className="flex-container">
              {["Пользователь 1", "Пользователь 2", "Пользователь 3"].map((user, index) => (
                <div className="rounded-card" key={index}>
                  {user}
                </div>
              ))}
            </div>
            <h2>Преподаватели</h2>
            <div className="flex-container">
              {["Пользователь 1", "Пользователь 2", "Пользователь 3"].map((user, index) => (
                <div className="rounded-card" key={index}>
                  {user}
                </div>
              ))}
            </div>
            <h2>Работодатели</h2>
            <div className="flex-container">
              {["Пользователь 1", "Пользователь 2", "Пользователь 3"].map((user, index) => (
                <div className="rounded-card" key={index}>
                  {user}
                </div>
              ))}
            </div>
          </>
        );
      case "courses":
        return (
          <>
            <h2>Курсы</h2>
            <div className="flex-container">
              {["Курс 1", "Курс 2", "Курс 3"].map((course, index) => (
                <div className="rounded-card" key={index}>
                  {course}
                </div>
              ))}
            </div>
          </>
        );
      case "vacancies":
        return (
          <>
            <h2>Вакансии</h2>
            <div className="flex-container">
              {["Вакансия 1", "Вакансия 2", "Вакансия 3"].map((vacancy, index) => (
                <div className="rounded-card" key={index}>
                  {vacancy}
                </div>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="info-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <label htmlFor="avatarInput">
            <img
              src={userData.avatar || "https://via.placeholder.com/150"}
              alt="Аватар"
              title="Нажмите, чтобы изменить аватар"
              style={{ cursor: "pointer" }}
            />
          </label>
          <input
            id="avatarInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(event) => handleAvatarChange(event)} 
          />
        </div>
        <div className="profile-details">
          <p className="profile-email" style={{ padding: "10px" }}>
            @admin
          </p>
        </div>
      </div>

      <div className="personal-info-section">
        <div className="button-container">
          <button
            className={`action-button ${activeTab === "users" ? "active" : "inactive"}`}
            onClick={() => setActiveTab("users")}
          >
            Пользователи
          </button>
          <button
            className={`action-button ${activeTab === "courses" ? "active" : "inactive"}`}
            onClick={() => setActiveTab("courses")}
          >
            Курсы
          </button>
          <button
            className={`action-button ${activeTab === "vacancies" ? "active" : "inactive"}`}
            onClick={() => setActiveTab("vacancies")}
          >
            Вакансии
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPage;
