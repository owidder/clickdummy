import React from "react";
import { Row, Col } from "antd";
import { TaskList } from "./TaskList";

import { TaskCategory } from "./TaskCategory";

import "./TaskManager.scss";

const CLAIMED = "claimed";
const UNRESOLVED_CS = "unresolved_checksums";

export class TaskManager extends React.Component {
  state = {
    selectedTasks: UNRESOLVED_CS
  };

  getCurrentTaskList = () => {
    switch (this.state.selectedTasks) {
      case CLAIMED:
        return this.props.claimed;
      case UNRESOLVED_CS:
        return this.props.unresolvedChecksums;
      default:
        return this.props.claimed;
    }
  };

  tasksAvailable = () => {
    return this.getCurrentTaskList().length > 0;
  };

  onCategoryClick = category => {
    this.setState({ selectedTasks: category });
  };

  render() {
    return (
      <>
        <h1>Tasks</h1>
        <Row>
          <Col span={5}>
            <div className={`task-container ${this.getCurrentTaskList().length > 0 ? "" : "no-tasks"}`}>
              <TaskCategory
                description="My Tasks"
                tasks={this.props.claimed}
                onClick={() => this.onCategoryClick(CLAIMED)}
              />
              <TaskCategory
                description="Unresolved checksums"
                tasks={this.props.unresolvedChecksums}
                onClick={() => this.onCategoryClick(UNRESOLVED_CS)}
              />
            </div>
          </Col>
          {this.tasksAvailable() ? (
            <Col span={8}>
              <div className="task-container right">
                <TaskList selectedTasks={this.getCurrentTaskList()} onClaim={this.props.onClaim} onUnclaim={this.props.onUnclaim}/>
              </div>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </>
    );
  }
}
