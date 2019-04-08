import React from "react";
import { Icon, Drawer, Badge } from "antd";
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
      <p
        className={`menu-item ${
          props.activePage === TASK_MANAGER ? "active" : ""
        } clickable`}
        onClick={() => props.handleNavClick(TASK_MANAGER)}
      >
        <Icon className="menu-icon" type="ordered-list" />{" "}
        <Badge dot>
          <span>Tasks</span>
        </Badge>
      </p>
      <p
        className={`menu-item ${
          props.activePage === REPORT_MANAGER ? "active" : ""
        } clickable`}
        onClick={() => props.handleNavClick(REPORT_MANAGER)}
      >
        <Icon className="menu-icon" type="clock-circle" /> Reports
      </p>
    </Drawer>
  );
};
