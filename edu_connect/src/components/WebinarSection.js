// WebinarSection.js
import React, { useState } from "react";

const WebinarSection = () => {
  const [isWebinarActive, setIsWebinarActive] = useState(false);

  const startWebinar = () => {
    // Имитация запуска вебинара
    setIsWebinarActive(true);
    console.log("Вебинар начат");
  };

  const endWebinar = () => {
    // Имитация завершения вебинара
    setIsWebinarActive(false);
    console.log("Вебинар завершен");
  };

  return (
    <div className="webinar-section">
      <h3>Вебинар и видеоконференция</h3>
      <p>Присоединяйтесь к вебинару и задавайте вопросы в реальном времени.</p>
      {!isWebinarActive ? (
        <button onClick={startWebinar}>Начать вебинар</button>
      ) : (
        <button onClick={endWebinar}>Закончить вебинар</button>
      )}
      {isWebinarActive && <p>Вебинар идет...</p>}
    </div>
  );
};

export default WebinarSection;
