import styled from "styled-components";

const SErrorMessage = styled.span`
  color: crimson;
  font-size: 14px;
  margin-top: 3px;
  font-weight: 600;
`;

export const ErrorMessage = ({ text }) => {
  return <SErrorMessage>{text}</SErrorMessage>;
};
