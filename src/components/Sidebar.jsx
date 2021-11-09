import React, { useContext } from "react";
import { SidebarChat } from "./SidebarChat";
import { ChatContext } from "../context/chat/ChatContext";
import { AuthContext } from "../auth/AuthContext";

export const Sidebar = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  const { users } = chatState;
  const { uid } = auth;

  return (
    <div className="inbox_chat">
      {users
        .filter((user) => user.uid !== uid)
        .map((user) => (
          <SidebarChat key={user.uid} user={user} />
        ))}

      <div className="extra_space"></div>
    </div>
  );
};
