import React from 'react';

const TopicDetails = ({ topic, onBack }) => {
  return (
    <div className="topic-details">
      <button onClick={onBack}>Назад</button>
      <h2>{topic.title}</h2>
      <p>{topic.content}</p>
      <h3>Комментарии</h3>
      <ul>
        {topic.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopicDetails;
