import styled from "styled-components";

const Wrap = styled.div``;
const Form = styled.form``;
const Title = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

export const Sign = () => {
  return (
    <Wrap>
      <Form>
        <Title>회원가입</Title>
        <Input type="text" placeholder="이름" />
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="패스워드" />
        <Input type="email" placeholder="이메일" />
        <Button>가입하기</Button>
      </Form>
    </Wrap>
  );
};
