import React, { useState } from "react";
import '../styles/CoursesPage.css';

const CourseTasks = ({ course, onBack }) => {
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);

    const handleInputChange = (e, question) => {
        setAnswers({
            ...answers,
            [question]: e.target.value,
        });
    };

    const handleTestSubmit = () => {
        let score = 0;
        const correctAnswers = {
            "Какое значение вернет `2 + 2`?": "4",
            "Сколько дней в неделе?": "7",
        };

        for (let question in correctAnswers) {
            if (answers[question]?.trim() === correctAnswers[question]) {
                score += 1;
            }
        }

        setResults(
            `Вы набрали ${score} из ${Object.keys(correctAnswers).length} правильных ответов.`
        );
    };

    return (
        <div className="course-tasks">
            <button className="back-button" onClick={onBack}>
                Назад к курсу
            </button>
            <h2>Задания по курсу: {course.title}</h2>
            <div className="task">
                <h3>Тест для проверки знаний</h3>
                <div className="question">
                    <p>Какое значение вернет `2 + 2`?</p>
                    <input
                        type="text"
                        placeholder="Введите ваш ответ"
                        onChange={(e) => handleInputChange(e, "Какое значение вернет `2 + 2`?")}
                    />
                </div>
                <div className="question">
                    <p>Сколько дней в неделе?</p>
                    <input
                        type="text"
                        placeholder="Введите ваш ответ"
                        onChange={(e) => handleInputChange(e, "Сколько дней в неделе?")}
                    />
                </div>
                <button className="submit-test-button" onClick={handleTestSubmit}>
                    Отправить ответ
                </button>
            </div>
            {results && <p className="results">{results}</p>}
        </div>
    );
};

export default CourseTasks;
