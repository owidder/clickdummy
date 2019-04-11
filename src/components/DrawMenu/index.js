import React from "react";
import { Icon, Drawer, Badge, Tooltip } from "antd";
import { TASK_MANAGER, REPORT_MANAGER } from "../../App.js";
import "./DrawMenu.scss";

export const DrawMenu = props => {
  return (
    <Drawer
      className="drawer"
      visible={props.menuVisible}
      placement="left"
      onClose={props.handleClick}
      mask={false}
      closable={false}
      width="12.6%"
    >
      <div
        className={`menu-item ${
          props.activePage === TASK_MANAGER ? "active" : ""
        } clickable`}
        onClick={() => props.handleNavClick(TASK_MANAGER)}
      >
        <Icon className="menu-icon" type="ordered-list" />{" "}
        <Tooltip title="Number of unassigned tasks">
          <Badge count={props.openTasks} offset={[17, 2]}>
            <span>Tasks</span>
          </Badge>
        </Tooltip>
      </div>
      <div
        className={`menu-item ${
          props.activePage === REPORT_MANAGER ? "active" : ""
        } clickable`}
        onClick={() => props.handleNavClick(REPORT_MANAGER)}
      >
        <Icon className="menu-icon" type="clock-circle" /> Reports
      </div>
    </Drawer>
  );
};
