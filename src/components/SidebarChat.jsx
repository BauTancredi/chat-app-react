import React from "react";

export const SidebarChat = () => {
  return (
    <div className="chat_list ">
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRBqTeY-dTImnv-0qS4j32of8dVtWelSEMw&usqp=CAU"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>Some random name</h5>
          <span className="text-success">Online</span>
          <span className="text-danger">Offline</span>
        </div>
      </div>
    </div>
  );
};
