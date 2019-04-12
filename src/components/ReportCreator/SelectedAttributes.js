import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Table, Tag } from "antd";

import "./SelectedAttributes.scss";

const DEFAULT_CELL_WIDTH = 180;
const EMPTY_QUERY_CELL_WIDTH = 350;

export class SelectedAttributes extends React.Component {
  state = {
    columns: [],
    data: []
  };

  createColumns = () => {
    let currentColumns = [];
    this.props.attributes.forEach(item =>
      currentColumns.push({
        title: (
          <div>
            <Draggable
              key={item.id}
              draggableId={`target-${item.id}`}
              index={item.id}
            >
              {provided => (
                <span
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <Tag color="blue" style={{marginLeft: "20px"}}>{item.description}</Tag>
                </span>
              )}
            </Draggable>
          </div>
        ),
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

  onReset = () => {
    this.setState({});
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
    const listIsEmpty =
      this.props.attributes === undefined || this.props.attributes.length === 0;
    const tableWidth =
      this.props.attributes.length > 0
        ? this.props.attributes.length * DEFAULT_CELL_WIDTH
        : EMPTY_QUERY_CELL_WIDTH;

    return (
      <>
        Report query:
        <Droppable
          droppableId="attributes-target"
          direction="horizontal"
          style={{ backgroundColor: "yellow", overflowX: "auto" }}
        >
          {provided => (
            <div className="selection-area empty">
              <div
                id="attributes-target"
                style={{ width: tableWidth }}
                ref={provided.innerRef}
              >
                {provided.placeholder}
                {this.props.attributes.length > 0 ? (
                  <Table
                    bordered
                    dataSource={this.state.data}
                    columns={this.state.columns}
                    pagination={false}
                  />
                ) : (
                  <span>Add at least one attribute to create a new query!</span>
                )}
              </div>
            </div>
          )}
        </Droppable>
      </>
    );
  }
}
