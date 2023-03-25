import { PokemonListProps } from './PokemonApp';

const PokemonGame = ({
  playerPokemonList,
}: {
  playerPokemonList: PokemonListProps[];
}) => {
  console.log(playerPokemonList);
  return <div>Game</div>;
};

export default PokemonGame;
