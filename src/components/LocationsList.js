import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import styled from "styled-components";

const LocList = styled.div`
  margin: 10px 10px 10px 10px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid yellow;
  justify-content: space-evently;
`;

export default function LocationsList() {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        setLocationData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <LocList>
      {locationData.map(location => {
        return <LocationCard locationInfo={location} />;
      })}
    </LocList>
  );
}
