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
    <div>
      <div className="mb-1 flex items-center gap-1">
        <button
          onClick={handleClick}
          className="rounded-full border-4  border-red-400 p-1"
          id="0"
        >
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList['0'].image}`}
            alt={playerPokemonList['0'].image}
            width={30}
            height={30}
            className="h-5 w-5 sm:h-10 sm:w-10"
          />
        </button>
        <button
          onClick={handleClick}
          className="rounded-full border-4 p-1"
          id="1"
        >
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList['1'].image}`}
            alt={playerPokemonList['1'].image}
            width={30}
            height={30}
            className="h-5 w-5 sm:h-10 sm:w-10"
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
            className="h-5 w-5 sm:h-10 sm:w-10"
          />
        </button>
      </div>
      <div className="mr-20">
        <Image
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${playerPokemonList[selectedPokemon].image}`}
          alt={playerPokemonList[selectedPokemon].image}
          width={110}
          height={110}
          className="h-40 w-44 border-4 p-2 sm:h-40"
        />
        <div className="bg-red-400 text-xs">
          {playerPokemons.length
            ? playerPokemons[selectedPokemon].stats[0].value
            : '100'}
        </div>
        <button className="my-1 flex w-full justify-between bg-red-400 text-xs">
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
        <button className="mb-1 flex w-full justify-between bg-red-400 text-xs">
          <p>Spe. Attack</p>
          <p>
            {playerPokemons.length
              ? playerPokemons[selectedPokemon].stats[3].value
              : '65'}
          </p>
        </button>
        <button className="flex w-full justify-between bg-red-400 text-xs">
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
    </div>
  );
};

export default PokemonPlayer;
