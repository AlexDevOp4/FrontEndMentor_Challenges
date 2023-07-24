import * as React from "react";
import DiceImg from "../images/icon-dice.svg";
import PatternDivider from "../images/pattern-divider-mobile.svg";
import axios from "axios";
import {  useState } from "react";

const IndexPage = () => {
  const [advice, setAdvice] = useState([]);



  const diceRoll = () => {
    axios.get("https://api.adviceslip.com/advice").then(function (response) {
      // handle success
      setAdvice(response.data.slip);
    });
  };

  return (
    <>
      <div className="flex justify-center items-center  h-screen">
        <div className="block p-6 rounded-2xl shadow-lg max-w-sm main-card text-center relative">
          <h5 className="text-neonGreen mt-4 text-xl leading-tight font-medium mb-2 pt-4 ">
            ADVICE # {advice.id}
          </h5>
          <p className="text-gray-400 text-xl pt-4 flex-shrink">"{advice.advice}"</p>
          <div className="pt-4">
            <img src={PatternDivider} alt="Dice" className=" h-6 w-auto" />
          </div>
          <button
            type="button"
            onClick={diceRoll}
            className="bg-neonGreen h-14 text-white font-medium leading-tight uppercase w-14 rounded-full submit-button text-center absolute -bottom-6 right-[165px]"
          >
            <img src={DiceImg} alt="Dice" className=" h-6 w-auto ml-4" />
          </button>
        </div>
      </div>

      <div>
        Challenge by
        <a href="https://github.com/AlexDevOp4" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Alex Ashtiany</a>.
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Advice Generator</title>;
