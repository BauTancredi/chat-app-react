import React, { useState, useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const handleChange = ({ target }) => {
    setMessage(target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (message.length === 0) return;
    setMessage("");

    socket.emit("personal-message", {
      from: auth.uid,
      to: chatState.activeChat,
      message,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
            value={message}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};
