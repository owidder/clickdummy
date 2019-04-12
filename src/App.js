import React, { Component } from "react";
import { Row, Col } from "antd";

import { Navigation } from "./components/Navigation";
import { TaskManager } from "./components/TaskManager";
import { ReportManager } from "./components/ReportManager";
import { DrawMenu } from "./components/DrawMenu";

import "./App.scss";

import { unresolvedChecksums } from "./sample_data/sample_data";

export const TASK_MANAGER = "task-manager";
export const REPORT_MANAGER = "report-manager";

class App extends Component {
  state = {
    menuVisible: true,
    activePage: TASK_MANAGER,
    claimedTasks: [],
    unresolvedChecksums: unresolvedChecksums
  };

  handleClick = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  };

  handleNavClick = componentKey => {
    this.setState({ activePage: componentKey });
  };

  handleClaim = taskId => {
    const task = this.state.unresolvedChecksums.filter(
      task => task.id === taskId
    )[0];
    task.claimed = true;

    const claimedTasks = this.state.claimedTasks;
    claimedTasks.push(task);

    const newUnresolved = this.state.unresolvedChecksums.filter(
      task => task.id !== taskId
    );

    this.setState({ claimedTasks, unresolvedChecksums: newUnresolved });
  };

  handleUnclaim = taskId => {
    const task = this.state.claimedTasks.filter(task => task.id === taskId)[0];
    task.claimed = false;

    const unresolvedChecksums = this.state.unresolvedChecksums;
    unresolvedChecksums.push(task);

    const newClaimed = this.state.claimedTasks.filter(
      task => task.id !== taskId
    );

    this.setState({ unresolvedChecksums, claimedTasks: newClaimed });
  };

  renderDrawer = () => (
    <DrawMenu
      menuVisible={this.state.menuVisible}
      activePage={this.state.activePage}
      handleClick={() => this.handleClick(this.state.activePage)}
      handleNavClick={componentKey => this.handleNavClick(componentKey)}
      openTasks={this.state.unresolvedChecksums.length}
    />
  );

  renderPageContent = componentKey => {
    switch (componentKey) {
      case TASK_MANAGER:
        return (
          <TaskManager
            claimed={this.state.claimedTasks}
            unresolvedChecksums={this.state.unresolvedChecksums}
            onClaim={taskId => this.handleClaim(taskId)}
            onUnclaim={taskId => this.handleUnclaim(taskId)}
          />
        );
      case REPORT_MANAGER:
        return <ReportManager />;
      default:
        return (
          <TaskManager
            claimed={this.state.claimedTasks}
            unresolvedChecksums={this.state.unresolvedChecksums}
            onClaim={taskId => this.handleClaim(taskId)}
            onUnclaim={taskId => this.handleUnclaim(taskId)}
          />
        );
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
