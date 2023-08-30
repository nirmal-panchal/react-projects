import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selected, setSelected] = useState();
  const [currDice, setCurrDice] = useState(1);
  const [score, setScore] = useState(0);
  const [err, setErr] = useState("");
  const [rules, ShowRules] = useState(false);

  const random = () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    if (!selected) {
      setErr("You Have Not Selected Any Number");
      return;
    }
    setCurrDice(dice);
    if (selected === dice) {
      setScore(score + dice);
    } else {
      setScore(score - dice);
    }
    setSelected(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          setErr={setErr}
          selected={selected}
          setSelected={setSelected}
          err={err}
        />
      </div>
      <RollDice currDice={currDice} random={random} />
      <div className="btn">
        <OutlineButton
          onClick={() => {
            setScore(0);
          }}
        >
          Reset
        </OutlineButton>
        <Button onClick={() => ShowRules(!rules)}>
          {!rules ? "Show " : "Hide "}Rules
        </Button>
      </div>
      {rules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 15px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
