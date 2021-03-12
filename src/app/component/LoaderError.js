import React from "react";
import styled from "styled-components";
import { MiniLoader } from "./MiniLoader";

const LoaderErrorWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`;
export const Loader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <LoaderErrorWrapper>
      <MiniLoader />
    </LoaderErrorWrapper>
  );
};

export const Error = ({ message }) => {
  if (!message) return null;
  console.log(message);
  return <LoaderErrorWrapper>{`${message}`}</LoaderErrorWrapper>;
};
