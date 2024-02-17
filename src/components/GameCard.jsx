import React from 'react';
import "../style.css";
import gameData from "../assets/data/gameData.json";

function GameCard({ id }) {
  const currentGameData = gameData.find(game => game.id === id);

  if (!currentGameData) {
    return <div>No game found for game number {id}</div>;
  }

  const { title, description, image, website } = currentGameData;

  const handlePlayClick = () => {
    window.open(website, '_blank');
  };

  return (
    <div className="card">
      <img src={image} alt="Game Cover Image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handlePlayClick}>Play</button>
    </div>
  );
}

export default GameCard;