import React, { Component } from "react";
import { Select, Button } from "semantic-ui-react";
import "./Recherche.css";

export class Recherche extends Component {
  state = {
    dpt: "",
    type: "",
  };

  onDptChange = (e, data) => {
    this.setState({ dpt: data.value });
  };

  onTypeChange = (e, data) => {
    this.setState({ type: data.value });
  };

  render() {
    const optionsDpt = [
      { value: "44", key: "44", text: "Loire Atlantique" },
      { value: "49", key: "49", text: "Maine et Loire" },
      { value: "53", key: "53", text: "Mayenne" },
      { value: "72", key: "72", text: "Sarthe" },
      { value: "85", key: "85", text: "Vendée" },
    ];

    const optionsType = [
      {
        value: "cpam",
        key: "cpam",
        text: "Caisse primaire d'assurance maladie",
      },
      {
        value: "cci",
        key: "cci",
        text: "Chambre de commerce et d'industrie",
      },
      { value: "crous", key: "crous", text: "Crous et ses antennes" },
    ];

    return (
      <div className="recherche">
        <Select
          placeholder="Choisissez un département"
          value={this.state.dpt}
          options={optionsDpt}
          onChange={this.onDptChange}
        />
        <Select
          placeholder="Choisissez une administration"
          options={optionsType}
          value={this.state.type}
          onChange={this.onTypeChange}
        />
        <Button
          primary
          onClick={() => this.props.onSearch(this.state.dpt, this.state.type)}
        >
          {" "}
          Lancer la recherche{" "}
        </Button>
        <Button secondary onClick={() => this.props.onEmpty()}>
          {" "}
          Vider la recherche{" "}
        </Button>
      </div>
    );
  }
}
