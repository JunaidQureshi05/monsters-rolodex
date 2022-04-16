import React from 'react';
import './style.css';
import axios from 'axios';
import MonstersContainer from './MonstersContainer';
import { useState, useEffect } from 'react';
export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [showMonsters, setShowMonsters] = useState(monsters);
  const [search, setSearch] = useState('');
  const filterMonsters = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    let filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    setShowMonsters(filtered);
  }, [monsters, search]);

  useEffect(() => {
    const getMonsters = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(data);
    };
    getMonsters();
  }, []);
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <div className="SearchContainer">
        <input type="text" className="search" onChange={filterMonsters} />
      </div>
      <MonstersContainer monsters={showMonsters} />
    </div>
  );
}
