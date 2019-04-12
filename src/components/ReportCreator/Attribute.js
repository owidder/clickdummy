import React from "react";
import { Tag } from "antd";

const Attribute = props => (
  <Tag color={props.color} style={{marginBottom: "4px"}}>{props.description}</Tag>
);

export default Attribute;
