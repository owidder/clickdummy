import React from "react";
import { Tabs } from "antd";
import { ReportCreator } from "../ReportCreator";

const TabPane = Tabs.TabPane;

const ATTRIBUTES = [
  {id: 0, description: 'a1'},
  {id: 1, description: 'b2'},
  {id: 2, description: 'c3'},
  {id: 3, description: 'd4'},
  {id: 4, description: 'e5'},
  {id: 5, description: 'f6'},
  {id: 6, description: 'g7'},
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
