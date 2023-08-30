import React from "react";
import styled from "styled-components";

const RollDice = ({ currDice, random }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={random}>
        <img src={`/dice_${currDice}.png`} alt="" />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
