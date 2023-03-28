import Image from 'next/image';

import { useEffect, useState } from 'react';
import { PokemonListProps } from './PokemonApp';

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
}: {
  playerPokemonList: PokemonListProps[];
}) => {
  const [pokemon1, setPokemon1] = useState<PlayerPokemon>();
  const [pokemon2, setPokemon2] = useState<PlayerPokemon>();
  const [pokemon3, setPokemon3] = useState<PlayerPokemon>();
  const [selectedPokemon, setSelectedPokemon] = useState(
    playerPokemonList['0'].image
  );
  useEffect(() => {
    const fetchPokemon = async () => {
      const [response1, response2, response3] = await Promise.all([
        fetch(
          `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${playerPokemonList['0'].id}.json`
        ),
        fetch(
          `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${playerPokemonList['1'].id}.json`
        ),
        fetch(
          `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${playerPokemonList['2'].id}.json`
        ),
      ]);
      setPokemon1(await response1.json());
      setPokemon2(await response2.json());
      setPokemon3(await response3.json());
    };
    fetchPokemon();
  }, [playerPokemonList]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedPokemon(e.target.alt);
    e.currentTarget.parentElement?.childNodes[0].classList.remove(
      'border-red-400'
    );

    e.currentTarget.parentElement?.childNodes[1].classList.remove(
      'border-red-400'
    );
    e.currentTarget.parentElement?.childNodes[2].classList.remove(
      'border-red-400'
    );

    e.currentTarget.classList.add('border-red-400');
  };

  return (
    <div className="flex items-center gap-4 h-40">
      <div className="flex items-center gap-2">
        <button onClick={handleClick} className="rounded-full border-4  p-1">
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList['0'].image}`}
            alt={playerPokemonList['0'].image}
            width={25}
            height={25}
          />
        </button>
        <button onClick={handleClick} className="rounded-full border-4  p-1">
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList['1'].image}`}
            alt={playerPokemonList['1'].image}
            width={25}
            height={25}
          />
        </button>
        <button onClick={handleClick} className="rounded-full border-4  p-1">
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList['2'].image}`}
            alt={playerPokemonList['2'].image}
            width={25}
            height={25}
          />
        </button>
      </div>
      <div>
        <Image
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${selectedPokemon}`}
          alt={selectedPokemon}
          width={80}
          height={80}
          className="rounded-full border-4 p-2"
        />
      </div>
    </div>
  );
};

export default PokemonGame;
