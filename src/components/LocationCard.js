import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import styled from "styled-components";

const LocCard = styled.div`
  margin: 5px 5px 5px 5px;
  paddding: 5px 5px 5px 5px;
  box-shadow: 2px 3px #352f2f;
  width: 45%;
  height: 200px;
`;
export default function LocationCard(props) {
  return (
    <>
      <LocCard>
        <Card>
          <Card.Content>
            <Card.Header>{props.locationInfo.name}</Card.Header>
            <Card.Meta>{props.locationInfo.type}</Card.Meta>
            <Card.Description>{props.locationInfo.dimension}</Card.Description>
            <Card.Description>{props.locationInfo.residents}</Card.Description>
          </Card.Content>
        </Card>
      </LocCard>
    </>
  );
}
