import React, { useEffect } from "react";
import './browser.css';

const Browser = (() => {
    const [pokemon, setPokemon] = React.useState('');
    const [pokemonData, setPokemonData] = React.useState([]);

    const useDebounce = (value, delay) => {
        const [debouncedValue, setDebouncedValue] = React.useState(value);

        useEffect(() => {
          const handler = setTimeout(() => {
            setDebouncedValue(value);
          }, delay);

          return () => {
            clearTimeout(handler);
          };
        }, [value, delay]);
      return debouncedValue;
    }

    const debouncedPokemon = useDebounce(pokemon, 3000);

    const changeHandler = event => {
        setPokemon(event.target.value);
    };

    const fetchData = async () => {
        console.log(pokemon)
        const fetchedData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await fetchedData.json();
        console.log(data)

        setPokemonData(data);
    }

    useEffect(() => {
      if (debouncedPokemon) {
        fetchData();
      }
    }, [debouncedPokemon]
  );

    return (
        <>
            <input 
                type="text"
                placeholder="Type a pokemon..."
                onChange={changeHandler}
            />

            {/* add pokemon card component*/}
            {pokemonData && <div></div>}
        </>
    )
});

export default Browser;
