import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
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
const Button = styled.div`
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
  line-height: 50px;
  cursor: pointer;
`;

export const Home = () => {
  return (
    <Wrap>
      <Container>
        <Title>환영합니다</Title>
        <Button>
          <Link to={"/login/0"}>로그인하기</Link>
        </Button>
        <Button>
          <Link to={"/login/1"}>회원가입하기</Link>
        </Button>
      </Container>
    </Wrap>
  );
};
