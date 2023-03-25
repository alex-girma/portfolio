import { useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import PokemonForm from './PokemonForm';
import PokemonGame from './PokemonGame';

const PokemonApp = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPokemonNames, setSelectedPokemonNames] = useState([
    'Bulbasaur',
    'Charmander',
    'Squirtle',
  ]);
  return (
    <AppWindowWrapper>
      <div className="p-6">
        {gameStarted ? (
          <PokemonGame />
        ) : (
          <PokemonForm
            setGameStarted={setGameStarted}
            selectedPokemonNames={selectedPokemonNames}
            setSelectedPokemonNames={setSelectedPokemonNames}
          />
        )}
      </div>
    </AppWindowWrapper>
  );
};

export default PokemonApp;
