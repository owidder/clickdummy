import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Attribute from "./Attribute";
import { Divider } from "antd";

export class AttributeSource extends React.Component {

  deriveColorFromAttributeGroup = groupId => {
    switch(groupId) {
      case 0:
      return "blue";
      case 1:
      return "blue";
      default:
      return "blue";
    }
  }

  render() {
    return (
      <Droppable droppableId="attributes-source" direction="horizontal">
        {provided => (
          <div ref={provided.innerRef} style={{ maxWidth: "750px", marginLeft: "10px" }}>
            {this.props.attributes.map((attributeCollection, groupId) => (
              <div key={groupId} style={{paddingTop:"6px"}}>
                <div key={groupId}>{attributeCollection.description}:</div>
                {attributeCollection.attributes.map((item, index) => (
                  <Draggable
                    key={attributeCollection.description + "-" + item.id}
                    draggableId={`source-${item.id}`}
                    index={item.id}
                  >
                    {provided => (
                      <span
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Attribute color={this.deriveColorFromAttributeGroup(groupId)} description={item.description} />
                      </span>
                    )}
                  </Draggable>
                ))}
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}
