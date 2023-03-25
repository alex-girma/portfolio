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

const PokemonSelectForm = ({
  index,
  selectedPokemon,
  setSelectedPokemon,
  selectedPokemonNames,
  setSelectedPokemonNames,
}: {
  index: number;
  selectedPokemon: number[];
  selectedPokemonNames: string[];
  setSelectedPokemon: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectedPokemonNames: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pokemonIndex = allPokemon.indexOf(e.target.value);
    const newSelectedPokemon = [...selectedPokemon];
    newSelectedPokemon[index] = pokemonIndex;

    const newSelectedPokemonNames = [...selectedPokemonNames];
    newSelectedPokemonNames[index] = e.target.value;

    setSelectedPokemonNames(newSelectedPokemonNames);
    setSelectedPokemon(newSelectedPokemon);
  };
  return (
    <div>
      <input className="bg-slate-200 block" />
      <select
        name="pokemon"
        value={allPokemon[selectedPokemon[index]]}
        onChange={handleChange}
      >
        {allPokemon.map((pokemon) => {
          return (
            <option value={pokemon} key={pokemon}>
              {pokemon}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PokemonSelectForm;
