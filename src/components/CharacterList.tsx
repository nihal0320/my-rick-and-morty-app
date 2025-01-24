'use client';

import { useState } from 'react';

interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [genderFilter, setGenderFilter] = useState<string>('');

  const filteredCharacters = characters.filter(
    (character) =>
      (statusFilter === '' || character.status === statusFilter) &&
      (genderFilter === '' || character.gender === genderFilter)
  );

  return (
    <div>
      {/* Filters */}
      <div className="flex justify-center space-x-4 mb-8">
        <select
          className="border rounded px-4 py-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          className="border rounded px-4 py-2"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {/* Character Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="p-4 bg-white shadow-md rounded">
            <img src={character.image} alt={character.name} className="rounded w-full h-48 object-cover" />
            <h3 className="mt-2 font-bold">{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
