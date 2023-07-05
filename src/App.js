import { useState } from "react";
import './App.css';
import React from "react";

function TransportPicker(){
  const [transportValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("🚶");
  
  const [previousTransportValue, setPreviousTransportValue] = useState("");

  const handleTransportChangeToCar = () => {
    const nextMood = "🚗";
    queueRerenderWithNewMoodValue(nextMood);
    setPreviousTransportValue(transportValueFromCurrentRender)
  };

  const handleTransportChangeToVespa = () => {
    const nextMood = "🛵";
    queueRerenderWithNewMoodValue(nextMood);
    setPreviousTransportValue(transportValueFromCurrentRender)
  };

  const handleTransportChangeToShip = () => {
    const nextMood = "🚢";
    queueRerenderWithNewMoodValue(nextMood);
    setPreviousTransportValue(transportValueFromCurrentRender)
  };

  const handleTransportChangeToBike = () => {
    const nextMood = "🚲";
    queueRerenderWithNewMoodValue(nextMood);
    setPreviousTransportValue(transportValueFromCurrentRender)
  };

  const handleTransportChangeToHelicopter = () => {
    const nextMood = "🚁";
    queueRerenderWithNewMoodValue(nextMood);
    setPreviousTransportValue(transportValueFromCurrentRender)
  };

  const handleTransportChangeToUfo = () => {
    const nextMood = "🛸";
    queueRerenderWithNewMoodValue(nextMood);
    setPreviousTransportValue(transportValueFromCurrentRender)
  };

  const handleTransportChangeToTrain = () => {
    const nextMood = "🚂";
    queueRerenderWithNewMoodValue(nextMood);
    setPreviousTransportValue(transportValueFromCurrentRender)
  };

  console.log(
    "Component is rendering with a mood value of",
    transportValueFromCurrentRender
  );

  return (
    <>
      <h1>Transport Picker</h1>
      <p>Previous Transport:{previousTransportValue}</p>
      <p>Chosen transport: <span className="default">{transportValueFromCurrentRender}</span></p>
      <p className="choose">Choose your favourite transport type:</p>
      <div className="button-container">
      <button onClick={handleTransportChangeToCar}>🚗</button>
      <button onClick={handleTransportChangeToVespa}>🛵</button>
      <button onClick={handleTransportChangeToShip}>🚢</button>
      <button onClick={handleTransportChangeToBike}>🚲</button>
      <button onClick={handleTransportChangeToHelicopter}>🚁</button>
      <button onClick={handleTransportChangeToUfo}>🛸</button>
      <button onClick={handleTransportChangeToTrain}>🚂</button>
      </div>
    </>
  );
}

export default TransportPicker;
