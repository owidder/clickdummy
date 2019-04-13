import React from "react";
import { Row, Col } from "antd";
import { TaskList } from "./TaskList";

import { TaskCategory } from "./TaskCategory";

import "./TaskManager.scss";

const CLAIMED = "claimed";
const UNRESOLVED_CS = "unresolved_checksums";
const OTHER_TASKS = "other_tasks";

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
      case OTHER_TASKS:
        return [];
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

  componentDidMount() {
    const taskContainer = document.querySelector(".task-container.right");
    const top = taskContainer.getBoundingClientRect().y;
    const bottom = window.innerHeight;
    const height = bottom - top;
    taskContainer.style.height = `${height}px`;
  }

  render() {
    return (
      <>
        <h1>Tasks</h1>
        <Row>
          <Col span={6}>
            <div
              className={`task-container ${
                this.getCurrentTaskList().length > 0 ? "" : "no-tasks"
              }`}
            >
              <TaskCategory
                description="My Tasks"
                tasks={this.props.claimed}
                onClick={() => this.onCategoryClick(CLAIMED)}
                active={this.state.selectedTasks === CLAIMED}
              />
              <TaskCategory
                description="Unresolved checksums"
                tasks={this.props.unresolvedChecksums}
                onClick={() => this.onCategoryClick(UNRESOLVED_CS)}
                active={this.state.selectedTasks === UNRESOLVED_CS}
              />
              <TaskCategory
                description="Other tasks"
                tasks={[]}
                onClick={() => this.onCategoryClick(OTHER_TASKS)}
                active={this.state.selectedTasks === OTHER_TASKS}
              />
            </div>
          </Col>
          <Col span={1}></Col>
          {this.tasksAvailable() ? (
            <Col span={12}>
              <div className="task-container right">
                <TaskList
                  selectedTasks={this.getCurrentTaskList()}
                  onClaim={this.props.onClaim}
                  onUnclaim={this.props.onUnclaim}
                />
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
