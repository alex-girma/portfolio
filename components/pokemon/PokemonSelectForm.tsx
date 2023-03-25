import { useEffect } from 'react';

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

const PokemonSelectForm = ({ randomPokemon }: { randomPokemon: number }) => {
  return (
    <div>
      <input className="bg-slate-200 block" />
      <select name="pokemon1" value={allPokemon[randomPokemon]}>
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
