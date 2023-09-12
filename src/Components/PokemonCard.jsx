const pokemonList = [
    {
        name: 'Bulbasaur',
        imgSrc: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg'
    },
    {
        name: 'Mew'
    }
]

function PokemonCard() {
    let pokemon = pokemonList[0];
    return (
<figure>
    {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
    <figcaption>{pokemon.name}</figcaption>
</figure>
    )
}

export default PokemonCard;