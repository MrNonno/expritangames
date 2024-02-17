import React from 'react';
import GameCard from './GameCard.jsx';

function GameAtlas() {
  const gameIds = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <>
      {gameIds.map(id => (
        <GameCard key={id} id={id} />
      ))}
    </>
  );
}

export default GameAtlas;