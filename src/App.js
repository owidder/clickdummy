import React, { Component } from "react";
import { Row, Col } from "antd";
import "./App.scss";

import { Navigation } from "./components/Navigation";
import { TaskManager } from "./components/TaskManager";
import { ReportManager } from "./components/ReportManager";
import { DrawMenu } from "./components/DrawMenu";

export const TASK_MANAGER = "task-manager";
export const REPORT_MANAGER = "report-manager";

class App extends Component {
  state = {
    menuVisible: true,
    activePage: REPORT_MANAGER
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
    <DrawMenu
      menuVisible={this.state.menuVisible}
      activePage={this.state.activePage}
      handleClick={() => this.handleClick(this.state.activePage)}
      handleNavClick={componentKey => this.handleNavClick(componentKey)}
    />
  );

  renderPageContent = componentKey => {
    switch (componentKey) {
      case TASK_MANAGER:
        return <TaskManager unresolved={42} resolved={13} />;
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
          />
        </Row>

        <Row className="app-content">
          {this.state.menuVisible ? (
            <>
              <Col span={3} id="drawer-col">
                {this.renderDrawer()}
              </Col>
              <Col span={21}>{currentPage}</Col>
            </>
          ) : (
            <Col span={24}>{currentPage}</Col>
          )}
        </Row>
      </div>
    );
  }
}

export default App;
