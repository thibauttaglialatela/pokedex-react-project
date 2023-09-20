import PropTypes from "prop-types";
import { useEffect } from "react";


function NavBar({ pokemonList, setPokemonIndex }) {
  const handleClik = (index) => {
    setPokemonIndex(index);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handleClik(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}


NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  setPokemonIndex: PropTypes.func.isRequired
};
export default NavBar;
