import { useState } from 'react';
import PokemonSelectForm from './PokemonSelectForm';

const PokemonForm = () => {
  const [selectedPokemonNames, setSelectedPokemonNames] = useState([
    'Bulbasaur',
    'Charmander',
    'Squirtle',
  ]);
  const [selectedPokemon, setSelectedPokemon] = useState([0, 1, 2]);
  const handleRandomPokemonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const temp: number[] = [];
    let num = Math.floor(Math.random() * 76);

    while (!temp.includes(num) && temp.length != 3) {
      temp.push(num);
      num = Math.floor(Math.random() * 76);
    }
    setSelectedPokemon(temp);
  };
  console.log(selectedPokemon);
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
        <PokemonSelectForm
          index={0}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemonNames={selectedPokemonNames}
          setSelectedPokemonNames={setSelectedPokemonNames}
        />
        <PokemonSelectForm
          index={1}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemonNames={selectedPokemonNames}
          setSelectedPokemonNames={setSelectedPokemonNames}
        />
        <PokemonSelectForm
          index={2}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemonNames={selectedPokemonNames}
          setSelectedPokemonNames={setSelectedPokemonNames}
        />
      </div>
      <button className="mt-10 bg-orange-600 hover:bg-orange-500 text-white px-3 rounded transition duration-200">
        Start Game
      </button>
    </form>
  );
};

export default PokemonForm;
