import './cards.css';
import React from "react";


type CardProps = {
  name: string;
  nickName: string;
  imageUrl: string;
  background: string;
  characters: [];
};

export const Cards = ( { characters }) => (
  <section id="wrap-cards">
    {
      characters.map((card: CardProps) => (
        <div className="card" key={card.name}>
            <div className='card-title'>
              <h3>{card.name}</h3>
              <h4>{card.nickName}</h4>
            </div>
            <div className='card-body'>
              <img src={card.imageUrl} />
              <p>{card.background}</p>
            </div>
          </div>
      ))
    }
    </section>
)