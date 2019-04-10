import React from "react";
import { Input, Button, Divider } from "antd";
import { DragDropContext } from "react-beautiful-dnd";
import { SelectedAttributes } from "./SelectedAttributes";
import { AttributeSource } from "./AttributeSource";

import "./ReportCreator.scss"

const getInitialState = () => {
  return {
    selectedAttributes: [],
    availableAttributes: [
      { id: 0, description: "a1" },
      { id: 1, description: "b2" },
      { id: 2, description: "c3" },
      { id: 3, description: "d4" },
      { id: 4, description: "e5" },
      { id: 5, description: "f6" },
      { id: 6, description: "g7" }
    ]
  };
};

export class ReportCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

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
        <SelectedAttributes attributes={this.state.selectedAttributes} />
        <div className="attribute-area">
          Available attributes:
          <div>
            <AttributeSource attributes={this.state.availableAttributes} />
          </div>
        </div>
        <div style={{marginTop: "10px"}}>
          <Button
            type="primary"
            style={{ marginRight: "10px", marginTop: "10px" }}
          >
            Save Report
          </Button>
          <Button
            type="secondary"
            onClick={() => {
              this.setState(getInitialState());
            }}
          >
            Reset Form
          </Button>
        </div>
      </DragDropContext>
    );
  }
}
