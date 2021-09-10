import { Component } from "react";
import { Message, Card } from "semantic-ui-react";
import "./App.css";
import Etablissement from "./composants/Etablissement";
import { Recherche } from "./composants/Recherche";
import MessageChargement from "./composants/MessageChargement";

class App extends Component {
  state = {
    isChargementDonne: false,
    data: [],
    error: "",
    isDonneTrouve: true,
  };

  renderResults = () => {
    return this.state.data.map((etablissement) => {
      return (
        <Etablissement
          key={etablissement.properties.id}
          properties={etablissement.properties}
        />
      );
    });
  };
  onEmpty = () => {
    this.setState({
      data: [],
      error: "",
      isChargementDonne: false,
      isDonneTrouve: true,
    });
  };

  onSearch = async (dpt, type) => {
    this.setState({
      isChargementDonne: true,
      isDonneTrouve: true,
    });
    if (dpt && type) {
      try {
        let response = await fetch(
          `https://etablissements-publics.api.gouv.fr/v3/departements/${dpt}/${type}`
        );
        let data = await response.json();
        this.setState({
          data: data.features,
          error: "",
          isChargementDonne: false,
        });
        if (this.state.data.length === 0)
          this.setState({
            isDonneTrouve: false,
          });
      } catch (e) {
        this.setState({ error: "Erreur lors de la recherche" });
      }
    } else {
      this.setState({
        error: "Merci de choisir un département et un établissement",
        isChargementDonne: false,
      });
    }
  };

  render() {
    return (
      <div className="app">
        <h1 className="bold">Annuaire des administrations</h1>

        <Recherche onSearch={this.onSearch} onEmpty={this.onEmpty}></Recherche>
        {this.state.error ? (
          <div className="width">
            <Message header={this.state.error} warning />
          </div>
        ) : undefined}
        {!this.state.isDonneTrouve ? (
          <div className="width">
            <Message header="Pas de données" negative />
          </div>
        ) : undefined}
        {this.state.isChargementDonne ? <MessageChargement /> : undefined}
        {this.state.data ? (
          <Card.Group>{this.renderResults()}</Card.Group>
        ) : undefined}
      </div>
    );
  }
}

export default App;
