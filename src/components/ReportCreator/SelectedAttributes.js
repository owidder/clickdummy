import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Table } from "antd";
import Attribute from "./Attribute";

import "./SelectedAttributes.scss";

export class SelectedAttributes extends React.Component {
  state = {
    columns: [],
    data: []
  };

  createColumns = () => {
    let currentColumns = [];

    this.props.attributes.forEach(item =>
      currentColumns.push({
        title: item.description,
        dataIndex: item.description,
        key: item.description
      })
    );

    this.setState({ columns: currentColumns });
  };

  createEmptyDataSet = () => {
    let data = [];
    data.push({
      key: "1",
      h8: ""
    });
    this.setState({ data });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.attributes.length !== prevState.columns.length) {
      this.createColumns();
      this.createEmptyDataSet();
    }
  }

  componentDidMount() {
    this.createColumns();
    this.createEmptyDataSet();
  }

  render() {
    return (
      <Droppable droppableId="attributes-target" direction="horizontal">
        {provided => (
          <div className="selection-area" ref={provided.innerRef}>
            {this.props.attributes.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={`target-${item.id}`}
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
            <Table dataSource={this.state.data} columns={this.state.columns} pagination={false}/>
          </div>
        )}
      </Droppable>
    );
  }
}
