import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
            .then(res => {
                setCharacters(res.data.results);
            })
            .catch(err => console.log(err.response));
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterCard key={character.id} name={character.name} image={character.image} species={character.species} status={character.status} location={character.location.name} origin={character.origin.name}/>        
      ))}
    </section>
  );
}
