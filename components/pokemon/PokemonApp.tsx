import Head from 'next/head';
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
  const [enemyPokemonList, setEnemyPokemonList] = useState<PokemonListProps[]>(
    []
  );
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <AppWindowWrapper>
        <div className="p-4">
          {gameStarted ? (
            <PokemonGame
              playerPokemonList={playerPokemonList}
              enemyPokemonList={enemyPokemonList}
            />
          ) : (
            <PokemonForm
              setGameStarted={setGameStarted}
              selectedPokemonNames={selectedPokemonNames}
              setSelectedPokemonNames={setSelectedPokemonNames}
              setPlayerPokemonList={setPlayerPokemonList}
              setEnemyPokemonList={setEnemyPokemonList}
            />
          )}
        </div>
      </AppWindowWrapper>
    </>
  );
};

export default PokemonApp;
