import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Attribute from "./Attribute";

export class AttributeSource extends React.Component {
  render() {
    return (
      <Droppable droppableId="attributes-source" direction="horizontal">
        {provided => (
          <div ref={provided.innerRef}>
            {this.props.attributes.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={`source-${item.id}`}
                index={index}
              >
                {provided => (
                  <span
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Attribute description={item.description} />
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
