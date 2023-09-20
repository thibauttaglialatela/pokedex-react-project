import "./App.css";
import PokemonCard from "./Components/PokemonCard";
import NavBar from "./Components/NavBar";
import { useState, useEffect } from "react";

function App() {
  useEffect(
    () => {
      alert("Welcome Pokemon trainer");
    },
    []
  );
  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg",
    },
    {
      name: "charmander",
      imgSrc:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/7.svg",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/25.svg",
    },
    {
      name: "Mew",
    },
  ];
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        pokemonList={pokemonList}
        setPokemonIndex={setPokemonIndex}
      />
    </div>
  );
}

export default App;
