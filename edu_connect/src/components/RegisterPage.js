import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AuthForm.css";

const RegisterPage = () => {
  const [user_name, setUserName] = useState("");
  const [user_surname, setUserSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date_birthday, setDateBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [idUniversity, setIdUniversity] = useState("");
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id_university, setUniversities] = useState([]);

  const navigate = useNavigate();

  // Форматирование даты для отображения на клиенте (дд.мм.гггг)
  // Форматирование даты для отображения на клиенте (дд.мм.гггг)
  const formatDateForDisplay = (date) => {
    const d = new Date(date);
    // Если дата невалидная, возвращаем пустую строку
    if (isNaN(d.getTime())) {
      return "";  // Или другой дефолтный текст
    }
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };


  // Преобразование даты в формат гггг-мм-дд перед отправкой на сервер
  const formatDateForServer = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Получение списка университетов с сервера
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/university/all_university");
        setUniversities(response.data.universities);
      } catch (error) {
        console.error("Ошибка загрузки университетов:", error);
      }
    };
    fetchUniversities();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!policyAccepted) {
      alert("Вы должны принять политику конфиденциальности.");
      return;
    }

    const formattedDate = formatDateForServer(date_birthday); // Преобразуем дату перед отправкой

    const userData = {
      email,
      password,
      user_name,
      user_surname,
      phone,
      date_birthday: formattedDate,  // Отправляем дату в правильном формате
      id_university
    };

    console.log('Отправляемые данные:', userData);  // Отладка для проверки данных

    try {
      id_university.map((el) => {
        console.log(el, idUniversity);
        if (el.name_university === idUniversity) {
          userData.id_university=el.id_univ;
        }
      });

      console.log(userData);

      const response = await axios.post("http://localhost:8000/api/v1/auth/register", userData);
      console.log("Успешная регистрация:", response);
      alert("Регистрация прошла успешно.");
      navigate("/login");
    } catch (error) {
      console.log(userData);
      console.error('Ошибка при регистрации:', error);  // Логирование ошибки
      alert("Ошибка при регистрации: " + (error.response?.data?.message || "Попробуйте позже."));
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleRegister} className="auth-form">
        <h2>Регистрация</h2>

        <label htmlFor="user_name">Имя</label>
        <input
          type="text"
          id="user_name"
          placeholder="Введите имя"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <label htmlFor="user_surname">Фамилия</label>
        <input
          type="text"
          id="user_surname"
          placeholder="Введите фамилию"
          value={user_surname}
          onChange={(e) => setUserSurname(e.target.value)}
          required
        />

        <label htmlFor="email">Почта</label>
        <input
          type="email"
          id="email"
          placeholder="Введите вашу почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Номер телефона</label>
        <input
          type="tel"
          id="phone"
          placeholder="Введите номер телефона"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="date_birthday">Дата рождения</label>
        <input
          type="text"
          id="date_birthday"
          placeholder="дд.мм.гггг"
          value={formatDateForDisplay(date_birthday)}  // Показываем дату в нужном формате
          onChange={(e) => setDateBirthday(e.target.value)}
          required
        />

        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="idUniversity">Организация</label>
        <select
          id="idUniversity"
          value={idUniversity}
          onChange={(e) => {
            console.log(e.target);
            setIdUniversity(e.target.value)}} // сохраняем только id
          required
        >
          <option value="" disabled>
            Выберите организацию
          </option>
          {id_university.map((university) => (
            <option key={university.id} value={university.id}>
              {university.name_university}
            </option>
          ))}
        </select>


        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={policyAccepted}
            onChange={(e) => setPolicyAccepted(e.target.checked)}
          />
          <label onClick={() => setIsModalOpen(true)}>Я принимаю политику конфиденциальности</label>
        </div>

        <Link to="/login" className="loginButton">
          Войти
        </Link>
        <button type="submit" className="regButton">
          Зарегистрироваться
        </button>
      </form>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>Согласие на обработку персональных данных</h3>
            <p>
              Я (далее — Заявитель) даю согласие платформе EduConnect (далее —
              Оператор) на автоматизированную обработку и обработку без
              использования средств автоматизации моих персональных данных,
              предоставленных мною Оператору через сеть Интернет, используя сайт
              https://educonnect.ru.
            </p>
            <p>К персональным данным относятся: имя, фамилия, дата рождения (год, месяц, число), номер телефона, адрес электронной почты, место учебы или работы, 
              а также иные данные, которые могут быть переданы Оператору. 
              Обработка данных включает сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), 
              извлечение, использование, передачу (предоставление, доступ), обезличивание, блокирование, удаление и уничтожение.</p>
            <p>
            Цели обработки персональных данных: обеспечение работы платформы EduConnect и предоставление доступа 
            к ее функционалу, оказание образовательных услуг и услуг, связанных с трудоустройством, выполнение условий договоров на предоставление услуг, проведение консультаций и обратной связи с 
            пользователями, выполнение требований законодательства Российской Федерации.
            </p>
            <p> 
            Срок действия настоящего согласия составляет 3 года с момента его предоставления. В случае заключения с Заявителем договора на оказание услуг, согласие сохраняет силу на весь 
            срок действия договора и в течение 3 лет после завершения исполнения обязательств сторон по договору.
            </p>
            <p>
            Заявитель уведомлен, что предоставление данного согласия является его правом, а не обязанностью. 
            Согласие может быть отозвано в любое время путем подачи заявления в электронном виде на адрес электронной почты: support@educonnect.ru.
            </p>
            <p>
            Оператор обязуется прекратить обработку персональных данных и уничтожить их в течение срока, предусмотренного законодательством 
            Российской Федерации, после получения заявления об отзыве согласия.
            </p>
            <p>
            Подписывая данное согласие, я подтверждаю, что ознакомлен с условиями обработки персональных данных, а также с политикой конфиденциальности платформы EduConnect.
            </p>
            <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;

//КРАЙНИЙ СЛУЧАЙ localstorage
// import { useState } from "react"; 
// import { Link, useNavigate } from 'react-router-dom'; 
// import "../styles/AuthForm.css"; 
 
// const RegisterPage = () => { 
//   const [firstName, setFirstName] = useState(""); 
//   const [lastName, setLastName] = useState(""); 
//   const [email, setEmail] = useState(""); 
//   const [phone, setPhone] = useState(""); 
//   const [birthDate, setBirthDate] = useState(""); 
//   const [password, setPassword] = useState(""); 
//   const [organization, setOrganization] = useState(""); 
//   const [role, setRole] = useState(""); 
//   const [policyAccepted, setPolicyAccepted] = useState(false); 
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate(); 
 
//   const handleRegister = (e) => { 
//     e.preventDefault(); 
 
//     if (!policyAccepted) { 
//       alert("Вы должны принять политику конфиденциальности."); 
//       return; 
//     } 
 
//     const userData = { 
//       firstName, 
//       lastName, 
//       email, 
//       phone, 
//       birthDate, 
//       password, 
//       organization, 
//       role, 
//     }; 
 
//     // Сохранение данных в localStorage 
//     localStorage.setItem("userData", JSON.stringify(userData)); 
//     console.log("Данные сохранены в localStorage:", userData); 
 
//     alert("Регистрация прошла успешно."); 
 
//     // Перенаправление на страницу ProfilePage 
//     navigate('/profile'); 
//   }; 
 
//   return ( 
//     <div className="auth-container"> 
//       <form onSubmit={handleRegister} className="auth-form"> 
//         <h2>Регистрация</h2> 
         
//         <label htmlFor="firstName">Имя</label> 
//         <input 
//           type="text" 
//           id="firstName" 
//           placeholder="Введите имя" 
//           value={firstName} 
//           onChange={(e) => setFirstName(e.target.value)} 
//           required 
//         /> 
 
//         <label htmlFor="lastName">Фамилия</label> 
//         <input 
//           type="text" 
//           id="lastName" 
//           placeholder="Введите фамилию" 
//           value={lastName} 
//           onChange={(e) => setLastName(e.target.value)} 
//           required 
//         /> 
 
//         <label htmlFor="email">Почта</label> 
//         <input 
//           type="email" 
//           id="email" 
//           placeholder="Введите вашу почту" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         /> 
 
//         <label htmlFor="phone">Номер телефона</label> 
//         <input 
//           type="tel" 
//           id="phone" 
//           placeholder="Введите номер телефона" 
//           value={phone} 
//           onChange={(e) => setPhone(e.target.value)} 
//           required 
//         /> 
 
//         <label htmlFor="birthDate">Дата рождения</label> 
//         <input 
//           type="date" 
//           id="birthDate" 
//           value={birthDate} 
//           onChange={(e) => setBirthDate(e.target.value)} 
//           required 
//         /> 
 
//         <label htmlFor="password">Пароль</label> 
//         <input 
//           type="password" 
//           id="password" 
//           placeholder="Введите пароль" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         /> 
 
//         <label htmlFor="organization">Организация</label> 
//         <input 
//           type="text" 
//           id="organization" 
//           placeholder="Введите вашу организацию" 
//           value={organization} 
//           onChange={(e) => setOrganization(e.target.value)} 
//         /> 
 
//         <fieldset> 
//           <legend>Выберите вашу роль:</legend> 
//           <label> 
//             <input 
//               type="radio" 
//               name="role" 
//               value="student" 
//               checked={role === "student"} 
//               onChange={(e) => setRole(e.target.value)} 
//             /> 
//             Студент 
//           </label> 
//           <label> 
//             <input 
//               type="radio" 
//               name="role" 
//               value="teacher" 
//               checked={role === "teacher"} 
//               onChange={(e) => setRole(e.target.value)} 
//             /> 
//             Преподаватель 
//           </label> 
//           <label> 
//             <input 
//               type="radio" 
//               name="role" value="employer" 
//               checked={role === "employer"} 
//               onChange={(e) => setRole(e.target.value)} 
//             /> 
//             Работодатель 
//           </label> 
//         </fieldset> 
 
//         <div className="checkbox-container"> 
//           <input 
//             type="checkbox" 
//             checked={policyAccepted} 
//             onChange={(e) => setPolicyAccepted(e.target.checked)} 
//           /> 
//           <label onClick={() => setIsModalOpen(true)}>Я принимаю политику конфиденциальности</label> 
//         </div> 
//         <Link to="/login" className="loginButton">Войти</Link> 
//         <button type="submit" className="regButton">Зарегистрироваться</button> 
//       </form> 

//       {isModalOpen && (
//         <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//           <h3>Согласие на обработку персональных данных</h3>
//             <p>
//               Я (далее — Заявитель) даю согласие платформе EduConnect (далее —
//               Оператор) на автоматизированную обработку и обработку без
//               использования средств автоматизации моих персональных данных,
//               предоставленных мною Оператору через сеть Интернет, используя сайт
//               https://educonnect.ru.
//             </p>
//             <p>К персональным данным относятся: имя, фамилия, дата рождения (год, месяц, число), номер телефона, адрес электронной почты, место учебы или работы, 
//               а также иные данные, которые могут быть переданы Оператору. 
//               Обработка данных включает сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), 
//               извлечение, использование, передачу (предоставление, доступ), обезличивание, блокирование, удаление и уничтожение.</p>
//             <p>
//             Цели обработки персональных данных: обеспечение работы платформы EduConnect и предоставление доступа 
//             к ее функционалу, оказание образовательных услуг и услуг, связанных с трудоустройством, выполнение условий договоров на предоставление услуг, проведение консультаций и обратной связи с 
//             пользователями, выполнение требований законодательства Российской Федерации.
//             </p>
//             <p> 
//             Срок действия настоящего согласия составляет 3 года с момента его предоставления. В случае заключения с Заявителем договора на оказание услуг, согласие сохраняет силу на весь 
//             срок действия договора и в течение 3 лет после завершения исполнения обязательств сторон по договору.
//             </p>
//             <p>
//             Заявитель уведомлен, что предоставление данного согласия является его правом, а не обязанностью. 
//             Согласие может быть отозвано в любое время путем подачи заявления в электронном виде на адрес электронной почты: support@educonnect.ru.
//             </p>
//             <p>
//             Оператор обязуется прекратить обработку персональных данных и уничтожить их в течение срока, предусмотренного законодательством 
//             Российской Федерации, после получения заявления об отзыве согласия.
//             </p>
//             <p>
//             Подписывая данное согласие, я подтверждаю, что ознакомлен с условиями обработки персональных данных, а также с политикой конфиденциальности платформы EduConnect.
//             </p>
//             <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
//           </div>
//         </div>
//       )}
//     </div> 
//   ); 
// }; 
 
// export default RegisterPage;