import React from "react";
// import "./Game.css";

class Game extends React.Component {
  render() {
    const { game } = this.props;
    return (
      <div className="Game">
        <div className="image-container">
          <img
            style={{ width: "180px", height: "180px" }}
            src={game.imageSrc}
            alt=""
          />
        </div>
        <h2>{game.name}</h2>
        <div className="Game-information">
          <p>{game.grade}</p>
          <p>
            {game.topic} {game.subtopic}
          </p>
        </div>
        <div className="Game-reviews">
          <h3>{game.category}</h3>
          <h3 className="rating">{game.rating}</h3>
          <p>{game.reviewCount}</p>
        </div>
      </div>
    );
  }
}

export default Game;
