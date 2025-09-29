import React from "react";
import Card from "./components/card";
import "./App.css"
import cardsData from "./assets/cardsData";

function App() {
  
  return (
    <>

    <h1> Projects</h1>

    <div className="cards">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <div className="contact">
              <contact />

      </div>
    </>
  );

}

export default App