import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import styled from "styled-components";

const EpisCard = styled.div`
  margin: 5px 5px 5px 5px;
  paddding: 5px 5px 5px 5px;
  box-shadow: 2px 3px #352f2f;
  width: 45%;
  height: 200px;
`;
export default function EpisodeCard(props) {
  return (
    <>
      <EpisCard>
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>{props.episodeInfo.name}</Card.Header>
              <Card.Meta>{props.episodeInfo.episode}</Card.Meta>
              <Card.Description>{props.episodeInfo.air_date}</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </EpisCard>
    </>
  );
}
