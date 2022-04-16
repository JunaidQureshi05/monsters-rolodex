import React from 'react';

const MonsterCard = ({ id, name, username, email }) => {
  return (
    <div className="MonsterCard">
      <img src={`https://robohash.org/${id}?set=set2&size=200x200`} />
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default MonsterCard;
