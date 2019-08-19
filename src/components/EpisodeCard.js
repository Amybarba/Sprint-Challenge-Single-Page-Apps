import React from "react";
import styled from "styled-components";

const EpisCard = styled.div `
margin: 5px 5px 5px 5px;
paddding: 5px 5px 5px 5px;
box-shadow: 2px 3px #352F2F;
width: 45%;
height: 200px;
`
export default function EpisodeCard ({name, air_date, episode, characters}) {
    return (
        <EpisCard>
            <p>{name}</p>
            <p>{air_date}</p>
            <p>{episode}</p>
            <p>{characters}</p>
        </EpisCard>
    );
}