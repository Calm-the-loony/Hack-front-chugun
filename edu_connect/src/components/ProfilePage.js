import { useEffect, useState } from "react"; 
import "../styles/ProfilePage.css"; 
 
const ProfilePage = () => { 
  const [userData, setUserData] = useState({}); 
 
  useEffect(() => { 
    const data = localStorage.getItem("userData"); 
    if (data) { 
      setUserData(JSON.parse(data)); 
    } 
  }, []); 
 
  return ( 
    <div className="info-container"> 
      {/* Прямоугольный небольшой блок */} 
      <div className="profile-header"> 
        <h1>Личный кабинет</h1> 
        <p><strong>Имя:</strong> {userData.firstName}</p> 
        <p><strong>Фамилия:</strong> {userData.lastName}</p> 
        <p><strong>Email:</strong> {userData.email}</p> 
      </div> 
 
      {/* Белый блок с дополнительной информацией */} 
      <div className="personal-info-section"> 
        <h2>Личные данные</h2> 
        <p><strong>Номер телефона:</strong> {userData.phone}</p> 
        <p><strong>Дата рождения:</strong> {userData.birthDate}</p> 
        <p><strong>Организация:</strong> {userData.organization}</p> 
        <p><strong>Роль:</strong> {userData.role}</p> 
      </div> 
    </div> 
  ); 
}; 
 
export default ProfilePage;