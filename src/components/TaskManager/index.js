import React from "react";
import { TaskContainer } from "../TaskContainer/TaskContainer";

export class TaskManager extends React.Component {
  render() {
    return (
      <>
        <TaskContainer
          description="Unresolved checksums"
          count={this.props.unresolved}
        />
        <TaskContainer
          description="Resolved checksums"
          count={this.props.resolved}
        />
      </>
    );
  }
}
