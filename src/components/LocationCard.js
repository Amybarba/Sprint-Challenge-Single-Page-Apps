import React from "react";
import styled from "styled-components";

const LocCard = styled.div `
margin: 5px 5px 5px 5px;
paddding: 5px 5px 5px 5px;
box-shadow: 2px 3px #352F2F;
width: 45%;
height: 200px;
`
export default function LocationCard({ name, type, dimension, residents }) {
  return (
  <LocCard>
    <span>{name}</span>
    <span>{type}</span>
    <span>{dimension}</span>
    <span>{residents}</span>
  </LocCard>
  );
}
