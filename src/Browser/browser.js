import React from "react";

const Browser = (() => {
    const [pokemon, setPokemon] = React.useState('');
    const [pokemonData, setPokemonData] = React.useState([]);

    // make call to api
    const fetchData = async () => {
        const fetchedData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await fetchedData.json();

        setPokemonData(data);
    }

    return (
        <>
            <input type="text" value={pokemon} onChange={e => setPokemon(e.target.value)} />
            <button onClick={() => fetchData()}> Search </button>

            {pokemonData && <div></div>}
        </>
    )
});

export default Browser;
