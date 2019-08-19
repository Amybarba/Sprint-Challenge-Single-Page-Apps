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
    const getLocation = () => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(item => {
          setLocationData(item.data.results);
        })
        .catch(error => {
          console.log("error", error);
        });
    };
    getLocation();
  }, []);

  console.log(locationData);

  return (
    <LocList>
      {locationData.map(item => {
        return (
          <LocationCard
            name={item.name}
            type={item.type}
            dimension={item.dimension}
            residents={item.residents}
          />
        );
      })}
    </LocList>
  );
}
