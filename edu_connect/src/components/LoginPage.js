import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import "../styles/AuthForm.css"; 
 
const LoginPage = () => { 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
 
  const handleLogin = (e) => { 
    e.preventDefault(); 
 
    console.log("Данные для входа:", { 
      email, 
      password, 
    }); 
 
    alert("Вход прошел успешно. Проверьте консоль."); 
     
    // Очистка данных после отправки формы 
    setEmail(""); 
    setPassword(""); 
  }; 
 
  return ( 
    <div className="auth-container"> 
      <form onSubmit={handleLogin} className="auth-form"> 
        <h2>Авторизация</h2> 
         
        {/* Поле Email */} 
        <label htmlFor="email">Почта</label> 
        <input 
          type="email" 
          id="email" 
          placeholder="Введите вашу почту" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        /> 
 
        {/* Поле Пароль */} 
        <label htmlFor="password">Пароль</label> 
        <input 
          type="password" 
          id="password" 
          placeholder="Введите пароль" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        /> 
 
        {/* Кнопка авторизации */} 
        <button type="submit" className="regButton">Войти</button> 
 
        {/* Ссылка на страницу регистрации */} 
        <Link to="/register" className="loginButton">Зарегистрироваться</Link> 
      </form> 
    </div> 
  ); 
}; 
 
export default LoginPage;