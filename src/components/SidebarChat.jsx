import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { fetchWithToken } from "../helpers/fetch";
import { scrollToBottom } from "../helpers/scrollToBottom";
import { types } from "../types/types";

export const SidebarChat = ({ user }) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const { activeChat } = chatState;

  const onClick = async () => {
    dispatch({
      type: types.activateChat,
      payload: user.uid,
    });

    const resp = await fetchWithToken(`messages/${user.uid}`);

    dispatch({
      type: types.loadMessages,
      payload: resp.messages,
    });

    scrollToBottom("messages");
  };

  return (
    <div
      className={`chat_list ${user.uid === activeChat && "active_chat"}`}
      onClick={onClick}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRBqTeY-dTImnv-0qS4j32of8dVtWelSEMw&usqp=CAU"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{user.name}</h5>
          {user.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
