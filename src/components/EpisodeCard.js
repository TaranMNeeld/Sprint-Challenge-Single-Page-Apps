import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>{props.episodeNum}</Card.Description>
        <Card.Description>{props.air_date}</Card.Description>
      </Card.Content>
    </Card>
  );
}
