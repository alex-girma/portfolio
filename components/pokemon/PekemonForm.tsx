import { useState } from 'react';
import PokemonSelectForm from './PokemonSelectForm';

const PokemonForm = () => {
  const [randomPokemon, setRandomPokemon] = useState([0, 1, 2]);
  const handleRandomPokemonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const temp: number[] = [];
    let num = Math.floor(Math.random() * 76);

    while (!temp.includes(num) && temp.length != 3) {
      temp.push(num);
      num = Math.floor(Math.random() * 76);
    }
    setRandomPokemon(temp);
  };
  return (
    <form className="flex flex-col items-center gap-5 text-sm">
      <h1>Choose your Pokemon</h1>
      <button
        onClick={handleRandomPokemonClick}
        className="bg-orange-600 hover:bg-orange-500 text-white px-3 rounded transition duration-200"
      >
        random Pokemon
      </button>
      <div className="flex gap-2">
        <PokemonSelectForm randomPokemon={randomPokemon[0]} />
        <PokemonSelectForm randomPokemon={randomPokemon[1]} />
        <PokemonSelectForm randomPokemon={randomPokemon[2]} />
      </div>
      <button className="mt-10 bg-orange-600 hover:bg-orange-500 text-white px-3 rounded transition duration-200">
        Start Game
      </button>
    </form>
  );
};

export default PokemonForm;
