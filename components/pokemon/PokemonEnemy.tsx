import Image from 'next/image';
import { useState } from 'react';
import { PokemonListProps } from './PokemonApp';

const PokemonEnemy = ({
  enemyPokemonList,
}: {
  enemyPokemonList: PokemonListProps[];
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
          width={90}
          height={90}
          className="border-4 p-2"
        />
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
