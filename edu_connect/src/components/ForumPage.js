import React, { useState } from "react";
import "../styles/ForumPage.css";

const generateNickname = () => {
    const adjectives = ["Brave", "Quick", "Bright", "Silent", "Clever"];
    const nouns = ["Tiger", "Eagle", "Fox", "Wolf", "Owl"];
    return (
        adjectives[Math.floor(Math.random() * adjectives.length)] +
        " " +
        nouns[Math.floor(Math.random() * nouns.length)]
    );
};

const ForumPage = () => {
    const [topics, setTopics] = useState([
        {
            id: 1,
            title: "Как улучшить производительность React-приложения?",
            author: generateNickname(),
            tags: ["React", "Performance"],
            isOpen: true,
            content: "Поделитесь советами по оптимизации приложения на React.",
            comments: [
                { author: "Clever Owl", text: "Попробуйте использовать React.memo." },
                { author: "Bright Fox", text: "Оптимизируйте рендеринг компонентов." },
            ],
        },
    ]);

    const [selectedTopic, setSelectedTopic] = useState(null);
    const [newTopic, setNewTopic] = useState({ title: "", tags: "", content: "" });
    const [newComment, setNewComment] = useState("");
    const [searchTag, setSearchTag] = useState("");
    const [isModerator, setIsModerator] = useState(false);
    const [activeTab, setActiveTab] = useState("open");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
    };

    const handleAddTopic = () => {
        if (!newTopic.title || !newTopic.content) return;
        const newId = Date.now();
        setTopics([
            ...topics,
            {
                id: newId,
                title: newTopic.title,
                author: generateNickname(),
                tags: newTopic.tags.split(",").map((tag) => tag.trim()),
                isOpen: true,
                content: newTopic.content,
                comments: [],
            },
        ]);
        setNewTopic({ title: "", tags: "", content: "" });
    };

    const handleAddComment = () => {
        if (!newComment) return;
        const updatedTopic = {
            ...selectedTopic,
            comments: [
                ...selectedTopic.comments,
                { author: generateNickname(), text: newComment },
            ],
        };
        setTopics(
            topics.map((topic) =>
                topic.id === selectedTopic.id ? updatedTopic : topic
            )
        );
        setSelectedTopic(updatedTopic);
        setNewComment("");
    };

    const handleCloseTopic = (id) => {
        setTopics(
            topics.map((topic) =>
                topic.id === id ? { ...topic, isOpen: false } : topic
            )
        );
    };

    const handleSearch = (e) => {
        setSearchTag(e.target.value);
    };

    const filteredTopics = topics.filter((topic) =>
        searchTag
            ? topic.tags.some((tag) =>
                tag.toLowerCase().includes(searchTag.toLowerCase())
            )
            : true
    );

    const filteredTopicsByTab = filteredTopics.filter(
        (topic) => (activeTab === "open" ? topic.isOpen : !topic.isOpen)
    );

    const handleBack = () => {
        setSelectedTopic(null);
    };

    return (
        <div className="forum-page">
            <div className="forum-header">
                <h1>Форум</h1>
                <input
                    type="text"
                    className="search-input"
                    placeholder="🔍 Поиск по тегам..."
                    value={searchTag}
                    onChange={handleSearch}
                />
                <label className="moderator-switch">
                    <input
                        type="checkbox"
                        checked={isModerator}
                        onChange={(e) => setIsModerator(e.target.checked)}
                    />
                    Модератор
                </label>
            </div>

            {!selectedTopic ? (
                <div>
                    <div className="tabs">
                        <div
                            className={`tab ${activeTab === "open" ? "active" : ""}`}
                            onClick={() => handleTabClick("open")}
                        >
                            Открытые
                        </div>
                        <div
                            className={`tab ${activeTab === "closed" ? "active" : ""}`}
                            onClick={() => handleTabClick("closed")}
                        >
                            Закрытые
                        </div>
                    </div>
                    <div className="topic-list">
                        {filteredTopicsByTab.map((topic) => (
                            <div
                                key={topic.id}
                                className={`topic-item ${!topic.isOpen ? "closed" : ""}`}
                                onClick={() => handleTopicClick(topic)}
                            >
                                <h3 className="topic-title">{topic.title}</h3>
                                <p className="topic-meta">
                                    Автор: {topic.author} | Теги: {topic.tags.join(", ")}
                                </p>
                                {!topic.isOpen && <span className="closed-label">Закрыта</span>}
                            </div>
                        ))}
                    </div>
                    <div className="new-topic-form">
    <h2>Создать новую тему</h2>
    <input
        type="text"
        placeholder="Заголовок"
        value={newTopic.title}
        onChange={(e) =>
            setNewTopic({ ...newTopic, title: e.target.value })
        }
    />
    <input
        type="text"
        placeholder="Теги (через запятую)"
        value={newTopic.tags}
        onChange={(e) =>
            setNewTopic({ ...newTopic, tags: e.target.value })
        }
    />
    <textarea
        placeholder="Содержание вопроса"
        value={newTopic.content}
        onChange={(e) =>
            setNewTopic({ ...newTopic, content: e.target.value })
        }
    ></textarea>
    <button className="add-button" onClick={handleAddTopic}>Добавить</button>
</div>

                </div>
            ) : (
                <div className="topic-details">
                    <button onClick={handleBack}>← Назад</button>
                    <h2>{selectedTopic.title}</h2>
                    <p>{selectedTopic.content}</p>
                    <h3>Комментарии</h3>
                    <div className="comments">
                        {selectedTopic.comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <p className="comment-meta">{comment.author}</p>
                                <p className="comment-text">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                    <textarea
                        placeholder="Добавить комментарий..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    ></textarea>
                    <button className="b-button" onClick={handleAddComment}>Отправить</button>
                    {isModerator && (
                        <button className="b-button" onClick={() => handleCloseTopic(selectedTopic.id)}>
                            Закрыть тему
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ForumPage;
