import React from "react";

import "./TaskManager.scss";

export const TaskCategory = props => (
  <div className={`task-category ${props.active ? "active" : ""}`} onClick={props.onClick}>
    <div className="description">
      <h2>{props.description}</h2>
    </div>
    <div>
      <h2>({props.tasks.length})</h2>
    </div>
  </div>
);
