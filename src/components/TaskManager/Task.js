import React from "react";
import moment from "moment";
import { Col, Row, Icon, Tooltip } from "antd";
import anime from "animejs";

import "./TaskManager.scss";

const hideTask = (id) => {
    return new Promise(resolve => {
        const animation = anime.timeline({
            targets: `.task._${id}`,
            "margin-top": 0,
            "margin-bottom": 0,
            "padding-top": 0,
            "padding-bottom": 0,
            duration: 1,
            easing: "linear"
        }).add({
            height: "0px",
            opacity: 0,
            duration: 500,
            easing: "easeInOutSine"
        });

        animation.finished.then(resolve);
    })
};

export class Task extends React.Component {
  renderClaimButton = claimed => {
    if (claimed) {
      return (
        <Tooltip title="Unclaim task">
          <Icon
            className="clickable"
            type="close-circle"
            theme="filled"
            style={{ color: "red", fontSize: "20px" }}
            onClick={() => {
                hideTask(this.props.id).then(() => this.props.onUnclaim(this.props.id));
            }}
          />
        </Tooltip>
      );
    }
    return (
      <Tooltip title="Claim task">
        <Icon
          className="clickable"
          type="check-circle"
          theme="filled"
          style={{ color: "green", fontSize: "20px" }}
          onClick={() => {
              hideTask(this.props.id).then(() => this.props.onClaim(this.props.id));
          }}
        />
      </Tooltip>
    );
  };

  render() {
    return (
      <div className={`task _${this.props.id}`}>
        <Row>
          <Col span={16} style={{ marginBottom: "3px" }}>
            <div style={{ fontWeight: "bold" }}>Task ID: {this.props.id}</div>
          </Col>
          <Col span={8} style={{ marginBottom: "3px" }}>
            <div>
              Created:{" "}
              {moment.unix(this.props.createdDate).format("DD.MM.YYYY")}
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div style={{ width: "80%" }}>{this.props.description}</div>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col span={22} />
          <Col span={2}>{this.renderClaimButton(this.props.claimed)}</Col>
        </Row>
      </div>
    );
  }
}
