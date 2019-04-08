import React from "react";
import { Input, Tag, Button } from "antd";
import "./ReportCreator.scss";

export class ReportCreator extends React.Component {
  render() {
    return (
      <div>
        <div>
          Title
          <p><Input placeholder="Report title" style={{width: "200px"}}/></p>
        </div>
        <div>Selected attributes:</div>
        <div className="ant-input selection-area" />
        <div>
          <Button type="primary" style={{ marginRight: "10px", marginTop: "10px" }}>
            Save Report
          </Button>
          <Button type="secondary">Reset Form</Button>
        </div>
        <div className="attribute-area">
          Available attributes:
          <p>
            {this.props.attributes.map(attr => (
              <Tag color="#108ee9">{attr}</Tag>
            ))}
          </p>
        </div>
      </div>
    );
  }
}
