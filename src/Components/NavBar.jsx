import PropTypes from "prop-types";

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    handleClickMinus: PropTypes.func.isRequired,
    handleClickPlus: PropTypes.func.isRequired,
    pokemonList: PropTypes.array.isRequired
}

function NavBar({ pokemonIndex, handleClickMinus, handleClickPlus, pokemonList }) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickMinus}>Il y a bien un précédent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickPlus}>Il y a bien un suivant</button>
      ) : null}
    </div>
  );
}

export default NavBar;