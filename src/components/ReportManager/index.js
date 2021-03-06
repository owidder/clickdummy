import React from "react";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

export class ReportManager extends React.Component {
  render() {
    return (
      <div>
        <h1>Reports</h1>
        <Tabs defaultActiveKey="1" onChange={() => {}} type="card">
          <TabPane tab="Create Report" key="1">
              <p>Empty</p>
          </TabPane>
          <TabPane tab="Saved Reports" key="2">
            <p>There are no saved reports yet.</p>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
