import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import AuthService from "../requests/AuthService"; // Импортируем сервис

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginData = { email, password };
      const response = await AuthService.login(loginData); // Вызываем сервис для авторизации
      console.log("Авторизация прошла успешно:", response);
      alert("Вход прошел успешно.");

      // Перенаправляем пользователя в его профиль
      navigate("/profile");
    } catch (error) {
      console.error("Ошибка при авторизации:", error);
      alert("Ошибка при авторизации: " + (error.response?.data?.message || "Попробуйте позже."));
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <h2>Авторизация</h2>
        <label htmlFor="email">Почта</label>
        <input
          type="email"
          id="email"
          placeholder="Введите вашу почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" className="regButton">
          Войти
        </button>
        <Link to="/register" className="loginButton">Зарегистрироваться</Link>
      </form>
    </div>
  );
};

export default LoginPage;

//КРАЙНИЙ СЛУЧАЙ localstorage
// import { useState } from "react"; 
// import { Link, useNavigate } from "react-router-dom"; 
// import "../styles/AuthForm.css"; 

// const LoginPage = () => { 
//   const [email, setEmail] = useState(""); 
//   const [password, setPassword] = useState(""); 
//   const navigate = useNavigate();  // хук для навигации

//   const handleLogin = (e) => { 
//     e.preventDefault(); 

//     console.log("Данные для входа:", { 
//       email, 
//       password, 
//     }); 

//     alert("Вход прошел успешно. Проверьте консоль."); 

//     // Если email содержит @admin-mail, перенаправляем на страницу AdminPage
//     if (email.includes("@admin-mail")) {
//       navigate("/admin");  // Перенаправление на страницу AdminPage
//     }

//     // Очистка данных после отправки формы
//     setEmail(""); 
//     setPassword(""); 
//   }; 

//   return ( 
//     <div className="auth-container"> 
//       <form onSubmit={handleLogin} className="auth-form"> 
//         <h2>Авторизация</h2> 

//         {/* Поле Email */} 
//         <label htmlFor="email">Почта</label> 
//         <input 
//           type="email" 
//           id="email" 
//           placeholder="Введите вашу почту" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         /> 

//         {/* Поле Пароль */} 
//         <label htmlFor="password">Пароль</label> 
//         <input 
//           type="password" 
//           id="password" 
//           placeholder="Введите пароль" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         /> 

//         {/* Кнопка авторизации */} 
//         <button type="submit" className="regButton">Войти</button> 

//         {/* Ссылка на страницу регистрации */} 
//         <Link to="/register" className="loginButton">Зарегистрироваться</Link> 
//       </form> 
//     </div> 
//   ); 
// }; 

// export default LoginPage;