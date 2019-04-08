import React from "react";

import "./TaskContainer.scss";

export const TaskContainer = props => (
  <div className="task-container">
    <p className="headline" style={{ maxWidth: "300px" }}>
      {props.description}: {props.count}
    </p>
  </div>
);
