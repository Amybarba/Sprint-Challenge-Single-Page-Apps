import React from "react";
import styled from "styled-components";

const CharCard = styled.div`
margin: 5px 5px 5px 5px;
paddding: 5px 5px 5px 5px;
box-shadow: 2px 3px #352F2F;
width: 45%;
height: 200px;
display: flex;
flex-wrap: wrap;
`

export default function CharacterCard  ({name, status, species, type, gender, origin}) {
return (
    <CharCard>
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
      <p>{type}</p>
      <p>{gender}</p>
      <p>{origin}</p>
    </CharCard>
  ); 
}