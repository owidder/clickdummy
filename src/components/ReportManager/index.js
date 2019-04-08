import React from "react";
import { Tabs } from "antd";
import { ReportCreator } from "../ReportCreator";

const TabPane = Tabs.TabPane;

const ATTRIBUTES = [
  'a1',
  'b2',
  'c3',
  'd4',
  'e5',
  'f6',
  'g7',
  'h8',
  'i9',
]

export class ReportManager extends React.Component {
  render() {
    return (
      <div>
        <h1>Reports</h1>
        <Tabs defaultActiveKey="1" onChange={() => {}} type="card">
          <TabPane tab="Create Report" key="1">
            <ReportCreator attributes={ATTRIBUTES}/>
          </TabPane>
          <TabPane tab="Saved Reports" key="2">
            Saved Reports
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
