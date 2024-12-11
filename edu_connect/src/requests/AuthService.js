// import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/v1/auth/';

// const AuthService = {
//   register: async (userData) => {
//     try {
//       const response = await axios.post(`${API_URL}register`, userData);
//       return response.data; // Возвращаем данные из ответа
//     } catch (error) {
//       console.error("Ошибка при регистрации:", error.response?.data || error.message);
//       throw error.response?.data || error; // Пробрасываем ошибку для обработки в компоненте
//     }
//   },
// };

// export default AuthService;

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/auth/';

const AuthService = {
  // Регистрация пользователя
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}register`, userData);
      return response.data; // Возвращаем ответ от сервера
    } catch (error) {
      console.error("Ошибка при регистрации:", error.response?.data || error.message);
      throw error.response?.data || error; // Пробрасываем ошибку для обработки в компоненте
    }
  },

  // Авторизация пользователя
  login: async (loginData) => {
    try {
      const response = await axios.post(`${API_URL}login`, loginData);
      return response.data; // Возвращаем данные о пользователе или токен
    } catch (error) {
      console.error("Ошибка при авторизации:", error.response?.data || error.message);
      throw error.response?.data || error; // Пробрасываем ошибку для обработки в компоненте
    }
  },
};

export default AuthService;

