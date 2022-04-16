import React from 'react';
import MonsterCard from './MonsterCard';
const MonstersContainer = ({ monsters }) => {
  return (
    <div className="MonstersContainer">
      {monsters.map((monster) => (
        <MonsterCard {...monster} />
      ))}{' '}
    </div>
  );
};

export default MonstersContainer;
