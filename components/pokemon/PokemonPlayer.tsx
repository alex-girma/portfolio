import Image from 'next/image';
import { useState } from 'react';
import { PokemonListProps } from './PokemonApp';
import { PlayerPokemon } from './PokemonGame';

const PokemonPlayer = ({
  playerPokemonList,
  playerPokemons,
}: {
  playerPokemonList: PokemonListProps[];
  playerPokemons: PlayerPokemon[];
}) => {
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedPokemon(Number(e.currentTarget.id));
    document.getElementById('0')?.classList.remove('border-red-400');
    document.getElementById('1')?.classList.remove('border-red-400');
    document.getElementById('2')?.classList.remove('border-red-400');

    e.currentTarget.classList.add('border-red-400');
  };
  console.log(playerPokemons);

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={handleClick}
          className="rounded-full border-4  p-1 border-red-400"
          id="0"
        >
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList['0'].image}`}
            alt={playerPokemonList['0'].image}
            width={30}
            height={30}
          />
        </button>
        <button
          onClick={handleClick}
          className="rounded-full border-4  p-1"
          id="1"
        >
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList['1'].image}`}
            alt={playerPokemonList['1'].image}
            width={30}
            height={30}
          />
        </button>
        <button
          onClick={handleClick}
          className="rounded-full border-4  p-1"
          id="2"
        >
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList['2'].image}`}
            alt={playerPokemonList['2'].image}
            width={30}
            height={30}
          />
        </button>
      </div>
      <div className="mr-20">
        <Image
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList[selectedPokemon].image}`}
          alt={playerPokemonList[selectedPokemon].image}
          width={110}
          height={110}
          className="border-4 p-2"
        />
        <div className="bg-red-400 text-xs">
          {playerPokemons.length
            ? playerPokemons[selectedPokemon].stats[0].value
            : '100'}
        </div>
        <button className="bg-red-400 text-xs flex w-full justify-between my-1">
          <p>
            {playerPokemons.length
              ? playerPokemons[selectedPokemon].stats[1].name
              : 'Attack'}
          </p>
          <p>
            {playerPokemons.length
              ? playerPokemons[selectedPokemon].stats[1].value
              : '50'}
          </p>
        </button>
        <button className="bg-red-400 text-xs flex w-full justify-between mb-1">
          <p>Spe. Attack</p>
          <p>
            {playerPokemons.length
              ? playerPokemons[selectedPokemon].stats[3].value
              : '75'}
          </p>
        </button>
        <button className="bg-red-400 text-xs flex w-full justify-between">
          <p>
            {playerPokemons.length
              ? playerPokemons[selectedPokemon].stats[2].name
              : 'Defense'}
          </p>
          <p>
            {playerPokemons.length
              ? playerPokemons[selectedPokemon].stats[2].value
              : '50'}
          </p>
        </button>
      </div>
    </>
  );
};

export default PokemonPlayer;
