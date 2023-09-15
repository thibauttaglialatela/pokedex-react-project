import "./App.css";
import PokemonCard from "./Components/PokemonCard";
import { useState } from "react";

function App() {
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
  const handleClickPlus = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleClickMinus = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div>
        {pokemonIndex > 0 ? (
          <button onClick={handleClickMinus}>Il y a bien un précédent</button>
        ) : null}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={handleClickPlus}>Il y a bien un suivant</button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
