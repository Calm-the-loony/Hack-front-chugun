import React from 'react';


const ModeratorPanel = ({ onCloseTopic, onBanUser }) => {
  return (
    <div className="moderator-panel">
      <h3>Панель модератора</h3>
      <button onClick={onCloseTopic}>Закрыть тему</button>
      <button onClick={onBanUser}>Забанить пользователя</button>
    </div>
  );
};

export default ModeratorPanel;
