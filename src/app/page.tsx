'use client';

import { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';

interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // API'den karakterleri çekiyoruz
    const fetchCharacters = async () => {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        if (!res.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await res.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Rick & Morty Universe</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Characters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 text-center shadow-lg">
        <h2 className="text-5xl font-extrabold mb-4">Explore Rick & Morty Characters!</h2>
        <p className="text-lg">Filter and discover the craziest characters in the universe.</p>
      </section>

      {/* Character List */}
      <main className="container mx-auto px-6 py-10">
        <CharacterList characters={characters} />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 Rick and Morty Universe. All Rights Reserved.</p>
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
