import { useState } from 'react';

interface PokemonSelectFormProps {
  index: number;
  allPokemon: string[];
  selectedPokemonNames: string[];
  setSelectedPokemonNames: React.Dispatch<React.SetStateAction<string[]>>;
}

const PokemonSelectForm = ({
  index,
  allPokemon,
  selectedPokemonNames,
  setSelectedPokemonNames,
}: PokemonSelectFormProps) => {
  const [filteredPokemon, setfilteredPokemon] = useState(allPokemon);
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    const temp = allPokemon.filter((pokemon) =>
      pokemon.toLowerCase().includes(inputValue)
    );
    setfilteredPokemon(temp);
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedPokemonNames = [...selectedPokemonNames];
    newSelectedPokemonNames[index] = e.target.value;
    setSelectedPokemonNames(newSelectedPokemonNames);
  };
  return (
    <div>
      <input
        className="bg-slate-200 block"
        onChange={handleFilter}
        onBlur={(e) => (e.target.value = '')}
      />
      <select
        name="pokemon"
        value={selectedPokemonNames[index]}
        onChange={handleChange}
      >
        {filteredPokemon.map((pokemon) => {
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
