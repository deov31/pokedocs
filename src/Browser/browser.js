import React, { useState } from "react";
import { debounce } from '../utils/debounce'

import './browser.css';

const Browser = (() => {
    const [pokemonData, setPokemonData] = useState([]);

    const fetchData = async (pokemon) => {
        const fetchedData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await fetchedData.json();
        console.log(data)

        setPokemonData(data);
    }

    const optimizedFn = debounce(fetchData, 500);

    return (
        <>
            <input 
                type="text"
                placeholder="Type a pokemon..."
                onChange={e => optimizedFn(e.target.value)}
            />

            {/* add pokemon card component*/}
            {pokemonData && <div></div>}
        </>
    )
});

export default Browser;
