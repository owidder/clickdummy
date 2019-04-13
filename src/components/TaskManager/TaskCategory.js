import React from "react";

import "./TaskManager.scss";

export const TaskCategory = props => (
  <div className={`task-category ${props.active ? "active" : ""}`} onClick={props.onClick}>
    <div className="description">
      {props.description}
    </div>
    <div>
      ({props.tasks.length})
    </div>
  </div>
);
