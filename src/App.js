import "./App.css";
import { useEffect, useState } from "react";
import Ball from "./Ball";

const Ruletka = () => {
  const [rotation, setRotation] = useState(5);
  const [color, setColor] = useState("black");
  const [ballSpin, setBallSpin] = useState(-5);
  const colorMix = () => {
    const newColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
    setColor(newColor);
    const newRotation = Math.floor(Math.random() * 35)*100;
    const newSpin = Math.floor(Math.random() * 35) * 20+5;
    setBallSpin(newSpin);
    setRotation(newRotation);
    // console.log(ballSpin);
  };
  const numbersArray = [];
  for (let i = 0; i < 36; i++) {
    numbersArray.push(i);
  }
  useEffect(() => {
    console.log(ballSpin+5);
  }, [ballSpin]);
  const numberRulletka = numbersArray.map((element) => {
    return (
      <span key={element} style={{ transform: `rotateZ(${element * 10}deg)` }}>
        {element}
      </span>
    );
  });
  // console.log(numberRulletka);
  return (
    <div className="ruletka">
      <div
        className="circle-ruletka"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <Ball spin={ballSpin} />
        <div className="numbers">{numberRulletka}</div>
      </div>
      <div className="button">
        <button onClick={colorMix} style={{ color: `${color}` }}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default Ruletka;
