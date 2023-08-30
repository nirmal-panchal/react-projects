import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ selected, setSelected, err, setErr }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  const NumSelHandler = (item) => {
    setSelected(item);
    setErr("");
  };
  return (
    <NumberSelectorContainer>
      <p style={{ color: "red" }}>{err}</p>
      <div className="flex">
        {arr.map((item, index) => {
          return (
            <Box
              isSelected={selected === item}
              key={index}
              onClick={() => {
                NumSelHandler(item);
              }}
            >
              {item}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    text-align: end;
  }
`;

const Box = styled.div`
  height: 72px;
  cursor: pointer;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => props.isSelected && "black"};
  color: ${(props) => props.isSelected && "white"};
`;
