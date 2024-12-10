import { useState } from "react"; 
import { Link, useNavigate } from 'react-router-dom'; 
import "../styles/AuthForm.css"; 
 
const RegisterPage = () => { 
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [phone, setPhone] = useState(""); 
  const [birthDate, setBirthDate] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [organization, setOrganization] = useState(""); 
  const [role, setRole] = useState(""); 
  const [policyAccepted, setPolicyAccepted] = useState(false); 
 
  const navigate = useNavigate(); 
 
  const handleRegister = (e) => { 
    e.preventDefault(); 
 
    if (!policyAccepted) { 
      alert("Вы должны принять политику конфиденциальности."); 
      return; 
    } 
 
    const userData = { 
      firstName, 
      lastName, 
      email, 
      phone, 
      birthDate, 
      password, 
      organization, 
      role, 
    }; 
 
    // Сохранение данных в localStorage 
    localStorage.setItem("userData", JSON.stringify(userData)); 
    console.log("Данные сохранены в localStorage:", userData); 
 
    alert("Регистрация прошла успешно."); 
 
    // Перенаправление на страницу ProfilePage 
    navigate('/profile'); 
  }; 
 
  return ( 
    <div className="auth-container"> 
      <form onSubmit={handleRegister} className="auth-form"> 
        <h2>Регистрация</h2> 
         
        <label htmlFor="firstName">Имя</label> 
        <input 
          type="text" 
          id="firstName" 
          placeholder="Введите имя" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required 
        /> 
 
        <label htmlFor="lastName">Фамилия</label> 
        <input 
          type="text" 
          id="lastName" 
          placeholder="Введите фамилию" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
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
 
        <label htmlFor="birthDate">Дата рождения</label> 
        <input 
          type="date" 
          id="birthDate" 
          value={birthDate} 
          onChange={(e) => setBirthDate(e.target.value)} 
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
 
        <label htmlFor="organization">Организация</label> 
        <input 
          type="text" 
          id="organization" 
          placeholder="Введите вашу организацию" 
          value={organization} 
          onChange={(e) => setOrganization(e.target.value)} 
        /> 
 
        <fieldset> 
          <legend>Выберите вашу роль:</legend> 
          <label> 
            <input 
              type="radio" 
              name="role" 
              value="student" 
              checked={role === "student"} 
              onChange={(e) => setRole(e.target.value)} 
            /> 
            Студент 
          </label> 
          <label> 
            <input 
              type="radio" 
              name="role" 
              value="teacher" 
              checked={role === "teacher"} 
              onChange={(e) => setRole(e.target.value)} 
            /> 
            Преподаватель 
          </label> 
          <label> 
            <input 
              type="radio" 
              name="role" value="employer" 
              checked={role === "employer"} 
              onChange={(e) => setRole(e.target.value)} 
            /> 
            Работодатель 
          </label> 
        </fieldset> 
 
        <div className="checkbox-container"> 
          <input 
            type="checkbox" 
            checked={policyAccepted} 
            onChange={(e) => setPolicyAccepted(e.target.checked)} 
          /> 
          <label>Я принимаю политику конфиденциальности</label> 
        </div> 
        <Link to="/login" className="loginButton">Войти</Link> 
        <button type="submit" className="regButton">Зарегистрироваться</button> 
      </form> 
    </div> 
  ); 
}; 
 
export default RegisterPage;