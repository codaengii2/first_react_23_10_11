import { useParams } from "react-router-dom";
import styled from "styled-components";
import { data } from "../api";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 15px;
  margin-top: 10px;
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: hotpink;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

export const Login = () => {
  const { id } = useParams();
  return (
    <Wrap>
      <Form>
        <Title>{data[id].title}</Title>
        <Input type="text" placeholder={data[id].username} />
        <Input type="text" placeholder={data[id].userid} />
        <Input type="password" placeholder={data[id].userpassword} />
        <Input type="email" placeholder={data[id].useremail} />
        <Button>{data[id].button}</Button>
      </Form>
    </Wrap>
  );
};
