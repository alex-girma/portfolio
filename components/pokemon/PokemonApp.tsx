import { useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import PokemonForm from './PekemonForm';
import PokemonGame from './PokemonGame';

const PokemonApp = () => {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <AppWindowWrapper>
      <div className="p-6">
        {gameStarted ? <PokemonGame /> : <PokemonForm />}
      </div>
    </AppWindowWrapper>
  );
};

export default PokemonApp;
