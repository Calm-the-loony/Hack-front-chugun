import { useEffect, useState } from "react";
import "../styles/ProfilePage.css";
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    skills: ["JavaScript", "React", "CSS"],
    interests: ["Спорт", "Программирование", "Музыка"],
  });

  const [activeTab, setActiveTab] = useState("profile");
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [isAddingInterest, setIsAddingInterest] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");
  const [isTeacher, setIsTeacher] = useState(false); 
  const [isEmployer, setIsEmployer] = useState(false); 
  const [newCourse, setNewCourse] = useState("");
  const [isCreatingCourse, setIsCreatingCourse] = useState(false); 
  const [isCreatingVacancy, setIsCreatingVacancy] = useState(false);
  const [newVacancy, setNewVacancy] = useState("");
  const [newWebinar, setNewWebinar] = useState(""); 
  const [isSchedulingWebinar, setIsSchedulingWebinar] = useState(false);
  
  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      const parsedData = JSON.parse(data);
      setUserData({
        ...parsedData,
        skills: parsedData.skills || ["Java", "React", "CSS"],
        interests: parsedData.interests || ["Украшения", "Программирование", "Музыка"],
      });

      setIsTeacher(parsedData.role === "teacher"); 
      setIsEmployer(parsedData.role === "employer");
    }
  }, []);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedUserData = { ...userData, avatar: reader.result };
        setUserData(updatedUserData);
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      const updatedSkills = [...userData.skills, newSkill.trim()];
      const updatedUserData = { ...userData, skills: updatedSkills };
      setUserData(updatedUserData);
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      setNewSkill("");
      setIsAddingSkill(false);
    }
  };

  const handleAddInterest = () => {
    if (newInterest.trim()) {
      const updatedInterests = [...userData.interests, newInterest.trim()];
      const updatedUserData = { ...userData, interests: updatedInterests };
      setUserData(updatedUserData);
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      setNewInterest("");
      setIsAddingInterest(false);
    }
  };

  const handleCreateCourse = () => {
    if (newCourse.trim()) {
      const updatedCourses = [...(userData.courses || []), newCourse.trim()];
      const updatedUserData = { ...userData, courses: updatedCourses };
      setUserData(updatedUserData);
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      setNewCourse("");
      setIsCreatingCourse(false);
    }
  };
  
  const handleScheduleWebinar = () => {
    if (newWebinar.trim()) {
      const updatedWebinars = [...(userData.webinars || []), newWebinar.trim()];
      const updatedUserData = { ...userData, webinars: updatedWebinars };
      setUserData(updatedUserData);
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      setNewWebinar("");
      setIsSchedulingWebinar(false);
    }
  };

  const handleCreateVacancy = () => {
    if (newVacancy.trim()) {
      const updatedVacancies = [...(userData.vacancies || []), newVacancy.trim()];
      setUserData({ ...userData, vacancies: updatedVacancies });
      localStorage.setItem("userData", JSON.stringify({ ...userData, vacancies: updatedVacancies }));
      setNewVacancy("");
      setIsCreatingVacancy(false);
    }
  };
  
  const formatDate = (date) => {
    if (!date) return "";
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) return date;
    return parsedDate.toLocaleDateString("ru-RU");
  };

  const renderContent = () => {
    if (isTeacher) {
      switch (activeTab) {
        case "profile":
          return (
            <>
              <h2>Личные данные</h2>
              <p><strong>Учебное заведение:</strong> {userData.organization}</p>
              <p><strong>Дата рождения:</strong> {formatDate(userData.birthDate)}</p>
              <p><strong>Номер телефона:</strong> {userData.phone}</p>
            </>
          );
          case "training":
            return (
              <>
                <h2>Созданные курсы</h2>
                <div className="flex-container">
                  {userData.courses?.map((course, index) => (
                    <div className="rounded-card active-course-card" key={index}>
                      {course}
                    </div>
                  ))}
                </div>
                {isCreatingCourse ? (
                  <div className="add-input">
                    <input
                      type="text"
                      placeholder="Название нового курса"
                      value={newCourse}
                      onChange={(e) => setNewCourse(e.target.value)}
                    />
                    <button className="custom-button" onClick={handleCreateCourse}>Создать</button>
                    <button className="custom-button" onClick={() => setIsCreatingCourse(false)}>Отмена</button>
                  </div>
                ) : (
                  <button className="custom-button" onClick={() => setIsCreatingCourse(true)}>Создать новый курс</button>
                )}
              </>
            );
          case "webinars":
            return (
              <>
                <h2>Проведенные вебинары</h2>
                <div className="flex-container">
                  {userData.webinars?.map((webinar, index) => (
                    <div className="rounded-card active-course-card" key={index}>
                      {webinar}
                    </div>
                  ))}
                </div>
                {isSchedulingWebinar ? (
                  <div className="add-input">
                    <input
                      type="text"
                      placeholder="Название нового вебинара"
                      value={newWebinar}
                      onChange={(e) => setNewWebinar(e.target.value)}
                    />
                    <button className="custom-button" onClick={handleScheduleWebinar}>Запланировать</button>
                    <button className="custom-button" onClick={() => setIsSchedulingWebinar(false)}>Отмена</button>
                  </div>
                ) : (
                  <button className="custom-button" onClick={() => setIsSchedulingWebinar(true)}>Запланировать новый вебинар</button>
                )}
              </>
            );
        default:
          return null;
      }
    } else if (isEmployer) {
      switch (activeTab) {
        case "profile":
          return (
            <>
              <h2>Личные данные</h2>
              <p><strong>Организация:</strong> {userData.organization}</p>
              <p><strong>Контактный телефон:</strong> {userData.phone}</p>
            </>
          );
        case "vacancies":
          return (
            <>
              <h2>Вакансии</h2>
              <div className="flex-container">
                {userData.vacancies?.map((vacancy, index) => (
                  <div className="rounded-card active-vacancy-card" key={index}>
                    {vacancy}
                  </div>
                ))}
              </div>
              {isCreatingVacancy ? (
                <div className="add-input">
                  <input
                    type="text"
                    placeholder="Название новой вакансии"
                    value={newVacancy}
                    onChange={(e) => setNewVacancy(e.target.value)}
                  />
                  <button className="custom-button" onClick={handleCreateVacancy}>Создать</button>
                  <button className="custom-button" onClick={() => setIsCreatingVacancy(false)}>Отмена</button>
                </div>
              ) : (
                <button className="custom-button" onClick={() => setIsCreatingVacancy(true)}>Создать новую вакансию</button>
              )}
            </>
          );
        case "responses":
          return (
            <>
              <h2>Отклики на вакансии</h2>
              <div className="flex-container">
                {["студент 1", "студент 2"].map((course, index) => (
                  <div className="rounded-card active-vak-card" key={index}>
                    {course}
                  </div>
                ))}
              </div>
            </>
          );
        default:
          return null;
      }
    }
    else {
      switch (activeTab) {
        case "profile":
          return (
            <>
              <h2>Личные данные</h2>
              <p><strong>Учебное заведение:</strong> {userData.organization}</p>
              <p><strong>Дата рождения:</strong> {formatDate(userData.birthDate)}</p>
              <p><strong>Номер телефона:</strong> {userData.phone}</p>

              <h2>Навыки</h2>
              <div className="flex-container">
                {(userData.skills || []).map((skill, index) => (
                  <div className="rounded-card" key={index}>{skill}</div>
                ))}
                <div className="rounded-card add-card" onClick={() => setIsAddingSkill(true)}>+</div>
              </div>
              {isAddingSkill && (
                <div className="add-input">
                  <input
                    type="text"
                    placeholder="Добавить навык"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                  <button onClick={handleAddSkill}>Добавить</button>
                  <button onClick={() => setIsAddingSkill(false)}>Отмена</button>
                </div>
              )}

            <h2>Интересы</h2>
            <div className="flex-container">
              {(userData.interests || []).map((interest, index) => (
                <div className="rounded-card" key={index}>{interest}</div>
              ))}
              <div className="rounded-card add-card" onClick={() => setIsAddingInterest(true)}>+</div>
            </div>
            {isAddingInterest && (
              <div className="add-input">
                <input
                  type="text"
                  placeholder="Добавить интерес"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                />
                <button onClick={handleAddInterest}>Добавить</button>
                <button onClick={() => setIsAddingInterest(false)}>Отмена</button>
              </div>
            )}

            <h2>Оценки преподавателей</h2>
            <div className="portfolio-section">
              <h3 className="portfolio-title">Рекомендации</h3>
              <div className="portfolio-grid">
                {[
                  { id: 1, text: "Студент имеет хорошие навыки в программировании. Рекомендуется развивать проектные навыки и работать с более сложными задачами." },
                  { id: 2, text: "Проявляет интерес к разработке игр. Рекомендуется углубить знания в работе с игровыми движками и графическими библиотеками." },
                  { id: 3, text: "Рекомендуется усилить навыки в программировании и тестировании для улучшения качества разработки." },
                ].map((card) => (
                  <div className="portfolio-card" key={card.id}>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </>
        );
        case "training":
          return (
            <>
             <h2>Активные курсы</h2>
            <div className="courses-list">
              {[
                {
                  title: "Основы программирования",
                  description: "Основы программирования. Изучите основы алгоритмов, циклов и структур данных.",
                },
                {
                  title: "Frontend-разработка",
                  description: "Научитесь создавать современные веб-приложения.",
                },
              ].map((course, index) => (
                <div className="course-card" key={index}>
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                </div>
              ))}
            </div>


              <Link to="/courses"><button className="custom-button">Записаться на курс</button></Link>
            </>
          );
        case "responses":
          return (
            <>
              <h2>Отклики на вакансии</h2>
            <div className="vacancies-list">
              {["Frontend Developer", "Backend Developer", "Full Stack Developer"].map((vacancy, index) => (
                <div className="vacancy-card" key={index}>
                  <h2>{vacancy}</h2>
                  <p><strong>Компания:</strong> Tech Corp</p>
                  <p><strong>Местоположение:</strong> Москва</p>
                  <p><strong>Тип работы:</strong> Полная занятость</p>
                  <p><strong>Описание:</strong> Разработка и поддержка интерфейсов</p>
                </div>
              ))}
            </div>

              <Link to="/vacancies"><button className="custom-button">Найти вакансии</button></Link>
              <h2>Приглашения</h2>
              <div className="vacancies-list">
                {["Приглашение на вакансию Frontend Developer"].map((invitation, index) => (
                  <div className="vacancy-card" key={index}>
                    <h2>{invitation}</h2>
                    <p><strong>Компания:</strong> Tech Corp</p>
                    <p><strong>Местоположение:</strong> Москва</p>
                    <p><strong>Тип работы:</strong> Полная занятость</p>
                    <p><strong>Описание:</strong> Разработка и поддержка интерфейсов.</p>
                  </div>
                ))}
              </div>
            </>
          );
        default:
          return null;
      }
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
            onChange={handleAvatarChange}
          />
        </div>
        <div className="profile-details">
          <p className="profile-name">{userData.firstName} {userData.lastName}</p>
          <p className="profile-email">{userData.email}</p>
        </div>
      </div>
      <div className="personal-info-section">
        <div className="button-container">
          <button
            className={`action-button ${activeTab === "profile" ? "active" : "inactive"}`}
            onClick={() => setActiveTab("profile")}
          >
            Портфолио
          </button>
          {isTeacher ? (
            <>
              <button
                className={`action-button ${activeTab === "training" ? "active" : "inactive"}`}
                onClick={() => setActiveTab("training")}
              >
                Курсы
              </button>
              <button
                className={`action-button ${activeTab === "webinars" ? "active" : "inactive"}`}
                onClick={() => setActiveTab("webinars")}
              >
                Вебинары
              </button>
            </>
          ) : isEmployer ? ( 
            <>
              <button
                className={`action-button ${activeTab === "vacancies" ? "active" : "inactive"}`}
                onClick={() => setActiveTab("vacancies")}
              >
                Вакансии
              </button>
              <button
                className={`action-button ${activeTab === "responses" ? "active" : "inactive"}`}
                onClick={() => setActiveTab("responses")}
              >
                Отклики
              </button>
            </>
          ) : (
            <>
              <button
                className={`action-button ${activeTab === "training" ? "active" : "inactive"}`}
                onClick={() => setActiveTab("training")}
              >
                Обучение
              </button>
              <button
                className={`action-button ${activeTab === "responses" ? "active" : "inactive"}`}
                onClick={() => setActiveTab("responses")}
              >
                Отклики
              </button>
            </>
          )}
        </div>
        {renderContent()}
      </div>

    </div>
  );
};

export default ProfilePage;