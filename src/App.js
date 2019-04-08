import React, { Component } from "react";
import { Icon, Drawer, Badge, Row, Col } from "antd";

import "./App.scss";

import { Navigation } from "./components/Navigation";
import { TaskManager } from "./components/TaskManager";
import { ReportManager } from "./components/ReportManager";

const NAVBAR_HEIGHT = "50px";

const TASK_MANAGER = "task-manager";
const REPORT_MANAGER = "report-manager";

const drawer = {
  marginTop: NAVBAR_HEIGHT,
  width: "240px"
};

class App extends Component {
  state = {
    menuVisible: true,
    activePage: TASK_MANAGER
  };

  handleClick = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  };

  handleNavClick = componentKey => {
    this.setState({ activePage: componentKey });
  };

  renderDrawer = () => (
    <Drawer
      style={drawer}
      visible={this.state.menuVisible}
      placement="left"
      onClose={() => this.handleClick(this.state.activePage)}
      mask={false}
      closable={false}
      width="12.6%"
    >
      <p
        className={`menu-item ${this.state.activePage === TASK_MANAGER ? "active" : ""} clickable`}
        onClick={() => this.handleNavClick(TASK_MANAGER)}
      >
        <Icon className="menu-icon" type="ordered-list" />{" "}
        <Badge dot>
          <span>Tasks</span>
        </Badge>
      </p>
      <p
        className={`menu-item ${this.state.activePage === REPORT_MANAGER ? "active" : ""} clickable`}
        onClick={() => this.handleNavClick(REPORT_MANAGER)}
      >
        <Icon className="menu-icon" type="clock-circle" /> Reports
      </p>
    </Drawer>
  );

  renderPageContent = componentKey => {
    switch (componentKey) {
      case TASK_MANAGER:
        return <TaskManager />;
      case REPORT_MANAGER:
        return <ReportManager />;
      default:
        return <TaskManager />;
    }
  };

  render() {
    const currentPage = this.renderPageContent(this.state.activePage);

    return (
      <div className="App">
        <Row>
          <Navigation
            menuVisible={this.state.menuVisible}
            handleClick={() => this.handleClick()}
            height={NAVBAR_HEIGHT}
          />
        </Row>

        {this.state.menuVisible ? (
          <Row>
            <Col span={3} id="drawer-col">
              {this.renderDrawer()}
            </Col>
            <Col span={21}>{currentPage}</Col>
          </Row>
        ) : (
          <Col span={24}>{currentPage}</Col>
        )}
      </div>
    );
  }
}

export default App;
