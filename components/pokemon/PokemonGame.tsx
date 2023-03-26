import Image from 'next/image';

import { useEffect } from 'react';
import { PokemonListProps } from './PokemonApp';

const PokemonGame = ({
  playerPokemonList,
}: {
  playerPokemonList: PokemonListProps[];
}) => {
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${playerPokemonList['0'].id}.json`
      );
      const data = await response.json();
      console.log(data);
    };
    fetchPokemon();
  }, [playerPokemonList]);
  return (
    <div>
      <Image
        src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList['0'].image}`}
        alt="weather icon"
        width={80}
        height={80}
      />
    </div>
  );
};

export default PokemonGame;
