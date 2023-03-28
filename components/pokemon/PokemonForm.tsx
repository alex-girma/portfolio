import { useEffect, useState } from 'react';
import { PokemonListProps } from './PokemonApp';
import PokemonSelectForm from './PokemonSelectForm';

const allPokemon = [
  'Bulbasaur',
  'Charmander',
  'Squirtle',
  'Caterpie',
  'Weedle',
  'Pidgey',
  'Rattata',
  'Spearow',
  'Ekans',
  'Pichu',
  'Pikachu',
  'Sandshrew',
  'Nidorina',
  'Cleffa',
  'Vulpix',
  'Igglybuff',
  'Zubat',
  'Oddish',
  'Paras',
  'Venonat',
  'Diglett',
  'Meowth',
  'Psyduck',
  'Mankey',
  'Growlithe',
  'Poliwag',
  'Abra',
  'Machop',
  'Bellsprout',
  'Tentacool',
  'Geodude',
  'Ponyta',
  'Slowpoke',
  'Magnemite',
  'Doduo',
  'Seel',
  'Grimer',
  'Shellder',
  'Gastly',
  'Onix',
  'Drowzee',
  'Krabby',
  'Voltorb',
  'Exeggcute',
  'Cubone',
  'Tyrogue',
  'Lickitung',
  'Koffing',
  'Rhyhorn',
  'Happiny',
  'Tangela',
  'Kangaskhan',
  'Horsea',
  'Goldeen',
  'Staryu',
  'Scyther',
  'Smoochum',
  'Elekid',
  'Magby',
  'Pinsir',
  'Tauros',
  'Magikarp',
  'Lapras',
  'Ditto',
  'Eevee',
  'Porygon',
  'Omanyte',
  'Kabuto',
  'Aerodactyl',
  'Munchlax',
  'Articuno',
  'Zapdos',
  'Moltres',
  'Dratini',
  'Mewtwo',
  'Mew',
];

interface PokemonFormProps {
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPokemonNames: string[];
  setSelectedPokemonNames: React.Dispatch<React.SetStateAction<string[]>>;
  setPlayerPokemonList: React.Dispatch<
    React.SetStateAction<PokemonListProps[]>
  >;
  setEnemyPokemonList: React.Dispatch<React.SetStateAction<PokemonListProps[]>>;
}

const PokemonForm = ({
  setGameStarted,
  selectedPokemonNames,
  setSelectedPokemonNames,
  setPlayerPokemonList,
  setEnemyPokemonList,
}: PokemonFormProps) => {
  const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);

  const handleRandomPokemonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const temp: string[] = [];
    let index = Math.floor(Math.random() * 76);

    while (!temp.includes(allPokemon[index]) && temp.length != 3) {
      temp.push(allPokemon[index]);
      index = Math.floor(Math.random() * 76);
    }
    setSelectedPokemonNames(temp);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (pokemonList.length) {
      const playerPokemon = pokemonList.filter((pokemon) => {
        if (selectedPokemonNames.includes(pokemon.name)) return pokemon.id;
      });

      setPlayerPokemonList(playerPokemon);

      // enemy pokemon

      const temp: string[] = [];
      let index = Math.floor(Math.random() * 76);

      while (!temp.includes(allPokemon[index]) && temp.length != 3) {
        temp.push(allPokemon[index]);
        index = Math.floor(Math.random() * 76);
      }
      const enemyPokemon = pokemonList.filter((pokemon) => {
        if (temp.includes(pokemon.name)) return pokemon.id;
      });
      setEnemyPokemonList(enemyPokemon);

      setGameStarted((value) => !value);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('fetchedPokemon')) {
      return setPokemonList(
        JSON.parse(sessionStorage.getItem('fetchedPokemon') || '')
      );
    }
    const fetchPokemonList = async () => {
      const response = await fetch(
        'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
      );
      const data: PokemonListProps[] = await response.json();
      setPokemonList(data);

      const playerPokemon = data.filter((pokemon) => {
        if (selectedPokemonNames.includes(pokemon.name)) return pokemon.id;
      });
      setPlayerPokemonList(playerPokemon);
      sessionStorage.setItem('fetchedPokemon', JSON.stringify(data));
    };
    fetchPokemonList();
  }, [selectedPokemonNames, setPlayerPokemonList]);

  return (
    <form className="flex flex-col items-center gap-5 text-sm">
      <h1>Choose your Pokemon</h1>
      <button
        onClick={handleRandomPokemonClick}
        className="bg-orange-600 hover:bg-orange-500 text-white px-3 rounded transition duration-200"
      >
        random Pokemon
      </button>
      <div className="flex gap-2">
        <PokemonSelectForm
          index={0}
          allPokemon={allPokemon}
          selectedPokemonNames={selectedPokemonNames}
          setSelectedPokemonNames={setSelectedPokemonNames}
        />
        <PokemonSelectForm
          index={1}
          allPokemon={allPokemon}
          selectedPokemonNames={selectedPokemonNames}
          setSelectedPokemonNames={setSelectedPokemonNames}
        />
        <PokemonSelectForm
          index={2}
          allPokemon={allPokemon}
          selectedPokemonNames={selectedPokemonNames}
          setSelectedPokemonNames={setSelectedPokemonNames}
        />
      </div>
      <button
        className="mt-10 bg-orange-600 hover:bg-orange-500 text-white px-3 rounded transition duration-200"
        onClick={handleClick}
      >
        Start Game
      </button>
    </form>
  );
};

export default PokemonForm;
