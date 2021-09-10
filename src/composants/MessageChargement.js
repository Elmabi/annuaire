import React from "react";
import { Loader } from "semantic-ui-react";

const MessageChargement = () => (
  <Loader active inverted inline="centered" content="Chargement des données" />
);

export default MessageChargement;
