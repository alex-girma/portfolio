import { useEffect, useState } from 'react';

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
  useEffect(() => {
    const temp = allPokemon.filter(
      (pokemon) => !selectedPokemonNames.includes(pokemon)
    );
    setfilteredPokemon([selectedPokemonNames[index], ...temp]);
  }, [selectedPokemonNames, allPokemon, index]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    const temp = filteredPokemon.filter((pokemon) =>
      pokemon.toLowerCase().includes(inputValue)
    );
    setfilteredPokemon([...temp]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedPokemonNames = [...selectedPokemonNames];
    newSelectedPokemonNames[index] = e.target.value;
    setSelectedPokemonNames(newSelectedPokemonNames);
  };
  return (
    <div>
      <input className="block bg-slate-200" onChange={handleFilter} />

      <select
        name="pokemon"
        onChange={handleChange}
        value={selectedPokemonNames[index]}
      >
        {filteredPokemon.map((pokemon) => {
          return (
            <option value={pokemon} key={pokemon + index}>
              {pokemon}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PokemonSelectForm;
