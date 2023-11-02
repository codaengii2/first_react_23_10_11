import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dbdbdb;
  height: 600px;
  margin-top: 25%;
  border-radius: 10px;
  padding: 50px 20px;
`;
export const Title = styled.h3`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 40px;
  letter-spacing: -2px;
`;
export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  padding: 0 10px;
  margin-bottom: 5px;
  border-radius: 10px;
`;
export const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: purple;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;
export const Separ = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
    width: 40%;
    height: 1px;
    background-color: #dbdbdb;
  }
  b {
    font-weight: 400;
    color: #555;
  }
`;
export const BottonInfo = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #9a9a9a;
`;
