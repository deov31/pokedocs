import React from "react";

const Browser = (() => {
    const [pokemon, setPokemon] = React.useState('');
    const [pokemonData, setPokemonData] = React.useState([]);

    const changeHandler = event => {
        setPokemon(event.target.value);
    };

    const debounce = (callback, wait = 1000) => {
        let timerId;
        return (...args) => {
          clearTimeout(timerId);
          timerId = setTimeout(() => {
            callback.apply(this, args)      
          }, wait);
        };
    }

    // make call to api
    const fetchData = async () => {
        console.log(pokemon)
        const fetchedData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await fetchedData.json();
        console.log(data)

        setPokemonData(data);
    }

    const debouncedChangeHandler = React.useCallback(
        debounce(fetchData, 1000)
      , []);

    return (
        <>
            <input 
                onKeyUp={debouncedChangeHandler}
                type="text"
                placeholder="Type a pokemon..."
                onChange={changeHandler}
            />
            <button onClick={() => fetchData()}> Search </button>

            {/* add pokemon card component*/}
            {pokemonData && <div></div>}
        </>
    )
});

export default Browser;
