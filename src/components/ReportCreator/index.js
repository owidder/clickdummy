import React from "react";
import { Input, Button } from "antd";
import { DragDropContext } from "react-beautiful-dnd";
import { SelectedAttributes } from "./SelectedAttributes";
import { AttributeSource } from "./AttributeSource";

import "./ReportCreator.scss";
import { debug } from "util";

const getInitialState = () => {
  return {
    selectedAttributes: [],
    availableAttributes: [
      {
        description: "Basic-Report",
        attributes: [
          { id: 0, description: "E/E-Komponente" },
          { id: 1, description: "Baureihenverbund" },
          { id: 2, description: "I-Stufe" },
          { id: 3, description: "SGBM-ID" },
          { id: 4, description: "CVN-Teilwert" },
          { id: 5, description: "BNTM-Konfigterm" },
          { id: 6, description: "Sachnummer" },
          { id: 7, description: "Bordnetzteilnehmer-Variante" },
          { id: 8, description: "CVN-Position" },
          { id: 9, description: "Beschreibung" },
          { id: 10, description: "Kommentar" },
          { id: 11, description: "Anzahl Sub-CVN" }
        ]
      },
      {
        description: "PSDH",
        attributes: [
          { id: 12, description: "Motor" },
          { id: 13, description: "Motorvariante" },
          { id: 14, description: "E-Baureihe" },
          { id: 15, description: "Karosserie" },
          { id: 16, description: "Getriebe" },
          { id: 17, description: "Hubraum" },
          { id: 18, description: "Model" },
          { id: 19, description: "Aufladung" }
        ]
      },
      {
        description: "Datenpflege",
        attributes: [
          { id: 20, description: "Testgroup" },
          { id: 21, description: "Steuergerätetyp" },
          { id: 22, description: "Module ID" }
        ]
      },
    ]
  };
};

const mapAttributeAndGroup = id => {
  if (id < 12) {
    return 0;
  } else if (id > 19) {
    return 2;
  }
  return 1;
}

// findGroupOfAttribute = attribute => {
//   if (attribute.id < 12) {
//     return 0;
//   } else if (attribute.id > 19) {
//     return 2;
//   }
//   return 1;
// }

// mapAttributeToGroup = attribute => {
// }

export class ReportCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  onDragEnd = result => {
    const { destination, source } = result;
    const { availableAttributes, selectedAttributes} = this.state;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      return;
    }

    const groupId = mapAttributeAndGroup(source.index);
    let movedItem = null;

    if (destination.droppableId === "attributes-target") {
      movedItem = availableAttributes[groupId].attributes.filter(item => item.id === source.index);
      availableAttributes[groupId].attributes = availableAttributes[groupId].attributes.filter(attribute => attribute.id !== source.index);
      selectedAttributes.splice(destination.index, 0, movedItem[0]);
      this.setState({ selectedAttributes, availableAttributes });
    } else {
      movedItem = selectedAttributes.filter(item => item.id === source.index)[0];
      const newSelected = selectedAttributes.filter(attribute => attribute.id !== source.index);
      availableAttributes[groupId].attributes.splice(destination.index, 0, movedItem);

      this.setState({ selectedAttributes: newSelected, availableAttributes });
    }

    return;
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        Title
        <p>
          <Input placeholder="Report title" style={{ width: "200px" }} />
        </p>
        <SelectedAttributes attributes={this.state.selectedAttributes} />
        <div className="attribute-area">
        <div>Available report attributes:</div>
            <AttributeSource attributes={this.state.availableAttributes} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button
            type="primary"
            style={{ marginRight: "10px", marginTop: "10px" }}
          >
            Save Report
          </Button>
          <Button
            type="secondary"
            onClick={() => {
              this.setState(getInitialState());
            }}
          >
            Reset Form
          </Button>
        </div>
      </DragDropContext>
    );
  }
}
