import React, { useEffect, useRef } from "react";

const ChatLists = ({ chats }) => {
  const endOfMessages = useRef();
  const user = localStorage.getItem("user");
  function SenderChat({ message, username, avatar }) {
    return (
      <div className="chat_sender">
        <img
          src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="N"
        />
        <p>
          <strong>{username}</strong> <br />
          {message}
        </p>
      </div>
    );
  }
  function ReceiverChat({ message, username, avatar }) {
    return (
      <div className="chat_receiver">
        <img
          src="https://i.pinimg.com/736x/b6/cc/ec/b6ccec8aca1c8e4ae11d676d2e4f4bdb.jpg"
          alt="R"
        />
        <p>
          <strong>{username}</strong> <br />
          {message}
        </p>
      </div>
    );
  }

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    endOfMessages.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chats_list">
      {chats.map((chat, index) => {
        if (chat.username === user) {
          return (
            <SenderChat
              key={index}
              message={chat.message}
              username={chat.username}
              avatar={chat.avatar}
            />
          );
        } else {
          return (
            <ReceiverChat
              key={index}
              message={chat.message}
              username={chat.username}
              avatar={chat.avatar}
            />
          );
        }
      })}
      <div ref={endOfMessages}></div>
    </div>
  );
};

export default ChatLists;
