import React from "react";
import { Icon, Row, Col } from "antd";
import logo from "./logo.png";
import "./Navigation.scss";

const menuButton = {
  cursor: "pointer",
  color: "white",
  fontSize: "32px"
};

const logoContainer = {
  marginTop: "8px",
  display: "inline",
};

export const Navigation = props => (
  <div className="nav-bar">
    <Row>
      <Col className="left-nav-column" span={3}>
      <div>
        <Icon
          onClick={props.handleClick}
          style={menuButton}
          type={props.menuVisible ? "menu-fold" : "menu-unfold"}
        />
      </div>
      </Col>
      <Col span={15} />
      <Col span={6} style={logoContainer}>
        <img src={logo} alt="bmw-logo"/>
      </Col>
    </Row>
  </div>
);
