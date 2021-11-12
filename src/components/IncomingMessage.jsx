import React from "react";
import { hourMonth } from "../helpers/hourMonth";

export const IncomingMessage = ({ msg }) => {
  hourMonth(msg.createdAt);
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRBqTeY-dTImnv-0qS4j32of8dVtWelSEMw&usqp=CAU"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{msg.message}</p>
          <span className="time_date">{hourMonth(msg.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};
