import styled from "styled-components";

const EMessage = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 500;
  margin-top: 2px;
`;

export const ErrorMessage = ({ text }) => {
  return <EMessage>{text}</EMessage>;
};
