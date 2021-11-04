import React from "react";

export const IncomingMessage = () => {
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
          <p>Test which is a new approach to have all solutions</p>
          <span className="time_date"> 11:01 AM | June 9</span>
        </div>
      </div>
    </div>
  );
};
