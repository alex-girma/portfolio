import { useEffect, useState } from 'react';
import { PokemonListProps } from './PokemonApp';
import PokemonEnemy from './PokemonEnemy';
import PokemonPlayer from './PokemonPlayer';

interface PlayerPokemon {
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
  const [playerPokemon1, setPlayerPokemon1] = useState<PlayerPokemon>();
  const [playerPokemon2, setPlayerPokemon2] = useState<PlayerPokemon>();
  const [playerPokemon3, setPlayerPokemon3] = useState<PlayerPokemon>();
  const [enemyPokemon1, setEnemyPokemon1] = useState<PlayerPokemon>();
  const [enemyPokemon2, setEnemyPokemon2] = useState<PlayerPokemon>();
  const [enemyPokemon3, setEnemyPokemon3] = useState<PlayerPokemon>();
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
      setPlayerPokemon1(await response1.json());
      setPlayerPokemon2(await response2.json());
      setPlayerPokemon3(await response3.json());
      setEnemyPokemon1(await response4.json());
      setEnemyPokemon2(await response5.json());
      setEnemyPokemon3(await response6.json());
    };
    fetchPokemon();
  }, [playerPokemonList, enemyPokemonList]);

  return (
    <div className="flex items-center gap-4 h-40">
      <PokemonPlayer playerPokemonList={playerPokemonList} />
      <PokemonEnemy enemyPokemonList={enemyPokemonList} />
    </div>
  );
};

export default PokemonGame;
