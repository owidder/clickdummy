import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Attribute from "./Attribute";

import "./SelectedAttributes.scss";

export class SelectedAttributes extends React.Component {
  render() {
    console.log(this.props.attributes);
    return (
      <Droppable droppableId="attributes-target" direction="horizontal">
        {provided => (
          <div className="selection-area" ref={provided.innerRef}>
            {this.props.attributes.map((attr, index) => (
              <Draggable
                key={attr.id}
                draggableId={`target-${attr.id}`}
                index={index}
              >
                {provided => (
                  <span
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Attribute description={attr.description} />
                  </span>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}
