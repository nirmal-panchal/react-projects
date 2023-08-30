import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const Home = ({ toggleGame }) => {
  return (
    <Container>
      <div>
        <img src="/dice.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggleGame}>Play Now</Button>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
