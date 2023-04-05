import Image from 'next/image';
import { useState } from 'react';
import { PokemonListProps } from './PokemonApp';
import { PlayerPokemon } from './PokemonGame';

const PokemonEnemy = ({
  enemyPokemonList,
  enemyPokemons,
}: {
  enemyPokemonList: PokemonListProps[];
  enemyPokemons: PlayerPokemon[];
}) => {
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedPokemon(Number(e.currentTarget.id) - 3);
    document.getElementById('3')?.classList.remove('border-red-400');
    document.getElementById('4')?.classList.remove('border-red-400');
    document.getElementById('5')?.classList.remove('border-red-400');

    e.currentTarget.classList.add('border-red-400');
  };

  return (
    <>
      <div>
        <Image
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${enemyPokemonList[selectedPokemon].image}`}
          alt={enemyPokemonList[selectedPokemon].image}
          width={110}
          height={110}
          className="border-4 p-2"
        />
        <div className="bg-red-400 text-xs">
          {enemyPokemons.length
            ? enemyPokemons[selectedPokemon].stats[0].value
            : '100'}
        </div>
        <button className="bg-red-400 text-xs flex w-full justify-between my-1">
          <p>
            {enemyPokemons.length
              ? enemyPokemons[selectedPokemon].stats[1].name
              : 'Attack'}
          </p>
          <p>
            {enemyPokemons.length
              ? enemyPokemons[selectedPokemon].stats[1].value
              : '50'}
          </p>
        </button>
        <button className="bg-red-400 text-xs flex w-full justify-between mb-1">
          <p>Spe. Attack</p>
          <p>
            {enemyPokemons.length
              ? enemyPokemons[selectedPokemon].stats[3].value
              : '65'}
          </p>
        </button>
        <button className="bg-red-400 text-xs flex w-full justify-between">
          <p>
            {enemyPokemons.length
              ? enemyPokemons[selectedPokemon].stats[2].name
              : 'Defense'}
          </p>
          <p>
            {enemyPokemons.length
              ? enemyPokemons[selectedPokemon].stats[2].value
              : '50'}
          </p>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleClick}
          className="rounded-full border-4  p-1"
          id="3"
        >
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${enemyPokemonList['0'].image}`}
            alt={enemyPokemonList['0'].image}
            width={30}
            height={30}
          />
        </button>
        <button
          onClick={handleClick}
          className="rounded-full border-4  p-1"
          id="4"
        >
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${enemyPokemonList['1'].image}`}
            alt={enemyPokemonList['1'].image}
            width={30}
            height={30}
          />
        </button>
        <button
          onClick={handleClick}
          className="rounded-full border-4  p-1"
          id="5"
        >
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${enemyPokemonList['2'].image}`}
            alt={enemyPokemonList['2'].image}
            width={30}
            height={30}
          />
        </button>
      </div>
    </>
  );
};

export default PokemonEnemy;
