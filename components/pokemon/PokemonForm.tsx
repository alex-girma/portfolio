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

export interface PokemonFormProps {
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPokemonNames: string[];
  setSelectedPokemonNames: React.Dispatch<React.SetStateAction<string[]>>;
}

const PokemonForm = ({
  setGameStarted,
  selectedPokemonNames,
  setSelectedPokemonNames,
}: PokemonFormProps) => {
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
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setGameStarted((value) => !value);
  };
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
        onClick={handleSubmit}
      >
        Start Game
      </button>
    </form>
  );
};

export default PokemonForm;
