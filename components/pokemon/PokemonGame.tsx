import { useEffect, useState } from 'react';
import { PokemonListProps } from './PokemonApp';
import PokemonEnemy from './PokemonEnemy';
import PokemonPlayer from './PokemonPlayer';

export interface PlayerPokemon {
  name: string;
  type: string[];
  stats: {
    name: string;
    value: number;
  }[];
  image: string;
}

const PokemonGame = ({
  playerPokemonList,
  enemyPokemonList,
}: {
  playerPokemonList: PokemonListProps[];
  enemyPokemonList: PokemonListProps[];
}) => {
  const [playerPokemons, setPlayerPokemons] = useState<PlayerPokemon[]>([]);
  const [enemyPokemons, setEnemyPokemons] = useState<PlayerPokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const [response1, response2, response3, response4, response5, response6] =
        await Promise.all([
          fetch(
            `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${playerPokemonList['0'].id}.json`
          ),
          fetch(
            `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${playerPokemonList['1'].id}.json`
          ),
          fetch(
            `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${playerPokemonList['2'].id}.json`
          ),
          fetch(
            `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${enemyPokemonList['0'].id}.json`
          ),
          fetch(
            `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${enemyPokemonList['1'].id}.json`
          ),
          fetch(
            `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${enemyPokemonList['2'].id}.json`
          ),
        ]);
      const temp = [
        await response1.json(),
        await response2.json(),
        await response3.json(),
      ];
      const temp1 = [
        await response4.json(),
        await response5.json(),
        await response6.json(),
      ];
      setPlayerPokemons(temp);
      setEnemyPokemons(temp1);
    };
    fetchPokemon();
  }, [playerPokemonList, enemyPokemonList]);

  return (
    <div className="flex flex-row gap-1 ">
      <PokemonPlayer
        playerPokemonList={playerPokemonList}
        playerPokemons={playerPokemons}
      />
      <PokemonEnemy
        enemyPokemonList={enemyPokemonList}
        enemyPokemons={enemyPokemons}
      />
    </div>
  );
};

export default PokemonGame;
