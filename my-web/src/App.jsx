import React from "react";
import "./App.css"
import cardsData from "./assets/cardsData";

import Card from "./components/card";

function App() {

  return (
    <>
      <h1> Projects</h1>
      <div className="projects">

        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </>
  );

}

export default App