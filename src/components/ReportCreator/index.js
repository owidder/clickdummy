import React from "react";
import { Input, Button } from "antd";
import { DragDropContext } from "react-beautiful-dnd";
import { SelectedAttributes } from "./SelectedAttributes";
import { AttributeSource } from "./AttributeSource";

export class ReportCreator extends React.Component {
  state = {
    selectedAttributes: [
      { id: 7, description: "h8" },
      { id: 8, description: "i9" }
  ],
    availableAttributes: this.props.attributes
  };

  onDragStart = () => {
    /*...*/
  };
  onDragUpdate = () => {
    /*...*/
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      return;
    }

    if (destination.droppableId === "attributes-target") {
      const availableAttributes = this.state.availableAttributes;
      const movedItem = availableAttributes.splice(source.index, 1);

      const selectedAttributes = this.state.selectedAttributes;
      selectedAttributes.splice(destination.index, 0, movedItem[0]);

      this.setState({ selectedAttributes, availableAttributes });
    } else {
      const selectedAttributes = this.state.selectedAttributes;
      const movedItem = selectedAttributes.splice(source.index, 1);

      const availableAttributes = this.state.availableAttributes;
      availableAttributes.splice(destination.index, 0, movedItem[0]);

      this.setState({ selectedAttributes, availableAttributes });
    }

    return;
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        Title
        <p>
          <Input placeholder="Report title" style={{ width: "200px" }} />
        </p>
        <div>Selected attributes:</div>
        <SelectedAttributes attributes={this.state.selectedAttributes} />
        <div>
          <Button
            type="primary"
            style={{ marginRight: "10px", marginTop: "10px" }}
          >
            Save Report
          </Button>
          <Button type="secondary">Reset Form</Button>
        </div>
        <div className="attribute-area">
          Available attributes:
          <div>
            <AttributeSource attributes={this.props.attributes} />
          </div>
        </div>
      </DragDropContext>
    );
  }
}
