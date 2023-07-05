import { useState } from "react";
import './App.css';
import React from "react";

function TransportPicker(){

//TRANSPORT SECTION

  const [transportValueFromCurrentRender, setTransportValueFromCurrentRender] =
    useState("🚶");
  ;

  const handleTransportChange = (nextTransport) => {
    setTransportValueFromCurrentRender(nextTransport);
  };

//ANIMALS SECTION

  const [animalValueFromCurrentRender, setAnimalValueFromCurrentRender] =
    useState("🚶");
  ;

  const handleAnimalChange = (nextTransport) => {
    setAnimalValueFromCurrentRender(nextTransport);
  };

  console.log(
    "Component is rendering with an animal value of",
    transportValueFromCurrentRender
  );

  return (
    <>
      <h1>Transport Picker</h1>
      <p>Your transport: <span className="default">{transportValueFromCurrentRender}</span></p>
      <p className="choose">Choose your favourite transport type:</p>
      <div className="button-container">
      <button onClick={() => handleTransportChange("🚗")}>🚗</button>
      <button onClick={() => handleTransportChange("🛵")}>🛵</button>
      <button onClick={() => handleTransportChange("🚢")}>🚢</button>
      <button onClick={() => handleTransportChange("🚲")}>🚲</button>
      <button onClick={() => handleTransportChange("🚁")}>🚁</button>
      <button onClick={() => handleTransportChange("🛸")}>🛸</button>
      </div>
      <p>Your animal: <span className="default">{animalValueFromCurrentRender}</span></p>
      <p className="choose">Choose your favourite animal:</p>
      <div className="button-container">
      <button onClick={() => handleAnimalChange("🐒")}>🐒</button>
      <button onClick={() => handleAnimalChange("🦅")}>🦅</button>
      <button onClick={() => handleAnimalChange("🦈")}>🦈</button>
      <button onClick={() => handleAnimalChange("🐨")}>🐨</button>
      <button onClick={() => handleAnimalChange("🐉")}>🐉</button>
      <button onClick={() => handleAnimalChange("🦄")}>🦄</button>
      </div>
    </>
  );
}

export default TransportPicker;
