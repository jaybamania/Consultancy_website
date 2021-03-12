import React from "react";
// import "./TabbedButton.css";
import { useState } from "react";
import styled, { css } from "styled-components";

const activeStyle = {
  borderBottom: "#f8c145 solid 5px",
  textAlign: "center",
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  width: 100%;
`;

const TabbedButtonContainer = styled.div`
  padding: 22px 16px;
  @media (max-width: 1199px) and (min-width: 768px) {
    padding: 10px 26px;
  }
  @media (min-width: 1200px) {
    padding: 10px 46px;
  }
`;

const Tab = styled.div`
  padding: 14px 0px;
  width: 50%;
  text-align: center;
  cursor: pointer;
  &:first-child {
    border-right: 1px solid rgb(232 232 232);
  }
  ${(props) =>
    props.isActive &&
    css`
      border-bottom: #f8c145 solid 5px;
    `}
`;

export default function TabbedButton({ text1, text2, isActive, toggleActive }) {
  // const [ isActive, toggleActive] = useState(true)
  return (
    <TabbedButtonContainer>
      <ButtonContainer>
        <Tab isActive={isActive} onClick={toggleActive}>
          {text1}
        </Tab>
        <Tab isActive={!isActive} onClick={toggleActive}>
          {text2}
        </Tab>
      </ButtonContainer>
    </TabbedButtonContainer>
  );
}
