import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>{props.type} {props.dimension}</Card.Description>
      </Card.Content>
      <Card.Content extra>Population: {props.residents}</Card.Content>
    </Card>
  );
}
