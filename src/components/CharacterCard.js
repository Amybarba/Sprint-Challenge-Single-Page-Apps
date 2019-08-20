import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const CharCard = styled.div`
  margin: 5px 5px 5px 5px;
  paddding: 5px 5px 5px 5px;
  box-shadow: 2px 3px #352f2f;
  width: 45%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
`;

export default function CharacterCard(props) {
  return (
    <CharCard>
      <Card>
        <Image src={props.characterInfo.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.characterInfo.name}</Card.Header>
          <Card.Meta>{props.characterInfo.location.name}</Card.Meta>
          <Card.Description>{props.characterInfo.species}</Card.Description>
          <Card.Description>{props.characterInfo.status}</Card.Description>
          <Card.Description>{props.characterInfo.origin.name}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Episodes
          </a>
        </Card.Content>
      </Card>
    </CharCard>
  );
}
