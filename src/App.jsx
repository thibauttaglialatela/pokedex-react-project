import "./App.css";
import PokemonCard from "./Components/PokemonCard";


function App() {
  const pokemonList = [
    {
        name: 'Bulbasaur',
        imgSrc: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg'
    },
    {
        name: 'Mew'
    }
]
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
}

export default App;
