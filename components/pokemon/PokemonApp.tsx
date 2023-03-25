import { useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import PokemonForm from './PokemonForm';
import PokemonGame from './PokemonGame';

export interface PokemonListProps {
  id: number;
  name: string;
  image: string;
}

const PokemonApp = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPokemonNames, setSelectedPokemonNames] = useState([
    'Bulbasaur',
    'Charmander',
    'Squirtle',
  ]);
  const [playerPokemonList, setPlayerPokemonList] = useState<
    PokemonListProps[]
  >([]);
  return (
    <AppWindowWrapper>
      <div className="p-6">
        {gameStarted ? (
          <PokemonGame playerPokemonList={playerPokemonList} />
        ) : (
          <PokemonForm
            setGameStarted={setGameStarted}
            selectedPokemonNames={selectedPokemonNames}
            setSelectedPokemonNames={setSelectedPokemonNames}
            setPlayerPokemonList={setPlayerPokemonList}
          />
        )}
      </div>
    </AppWindowWrapper>
  );
};

export default PokemonApp;
