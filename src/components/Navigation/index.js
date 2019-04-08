import React from "react";
import { Icon, Drawer, Badge, Row, Col } from "antd";
import logo from "./logo.png";

const NAVBAR_HEIGHT = "50px";

const navBar = {
  backgroundColor: "#8D8D8D",
  height: NAVBAR_HEIGHT
};

const leftCol = {
  height: NAVBAR_HEIGHT,
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "row",
  alignItems: "center"
};

const menuButton = {
  cursor: "pointer",
  color: "white",
  fontSize: "32px"
};

const drawer = {
  marginTop: NAVBAR_HEIGHT,
  width: "240px"
};

const logoContainer = {
  marginTop: "8px"
};

export const Navigation = props => (
  <div style={navBar}>
    <Row>
      <Col style={leftCol} span={3}>
        <Icon
          onClick={props.handleClick}
          style={menuButton}
          type={props.menuVisible ? "menu-fold" : "menu-unfold"}
        />
      </Col>
      <Col span={15} />
      <Col span={3} style={logoContainer}>
        <img src={logo} />
      </Col>
      <Col span={3} />
    </Row>

    <Row>
      <Col span={3} id="drawer-col">
        <Drawer
          style={drawer}
          visible={props.menuVisible}
          placement="left"
          onClose={props.handleClick}
          mask={false}
          closable={false}
          width="12.6%"
        >
          <p>
            <span className="clickable">
              <Icon type="ordered-list" />{" "}
              <Badge dot>
                <span>Tasks</span>
              </Badge>
            </span>
          </p>
          <p>
            <span className="clickable">
              <Icon type="clock-circle" /> Reports
            </span>
          </p>
        </Drawer>
      </Col>
      <Col span={21} />
    </Row>
  </div>
);
