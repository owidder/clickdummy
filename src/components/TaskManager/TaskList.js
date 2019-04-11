import React from "react";
import { Task } from "./Task";

export class TaskList extends React.Component {
  render() {
    const sortedTasks = this.props.selectedTasks.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))

    return (
      <div>
        {sortedTasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            createdDate={task.createdDate}
            description={task.description}
            claimed={task.claimed}
            onClaim={this.props.onClaim}
            onUnclaim={this.props.onUnclaim}
          />
        ))}
      </div>
    );
  }
}
