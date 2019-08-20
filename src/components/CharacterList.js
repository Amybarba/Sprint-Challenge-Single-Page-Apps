import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacterData(response.data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  console.log(characterData);

  return (
    <section className="character-list grid-view">
      {characterData.map(character => {
        return <CharacterCard characterInfo={character} />;
      })}
    </section>
  );
}
