import React from "react";
import { Card } from "semantic-ui-react";

const Etablissement = ({ properties }) => {
  const { nom, codeInsee, url } = properties;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{nom}</Card.Header>
        <Card.Meta>{codeInsee}</Card.Meta>
        <Card.Meta>
          <a href={url}> {url}</a>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};
export default Etablissement;
