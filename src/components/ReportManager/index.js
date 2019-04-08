import React from "react";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

export class ReportManager extends React.Component {
  render() {
    return (
      <div>
        <h1>Reports</h1>
        <Tabs defaultActiveKey="1" onChange={() => {}} type="card">
          <TabPane tab="Reports" key="1">
            Reports
          </TabPane>
          <TabPane tab="Saved Reports" key="2">
            Saved Reports
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
