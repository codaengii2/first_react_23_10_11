import styled from "styled-components";
import { data } from "../api";

const Wrap = styled.div``;
const Form = styled.div``;
const Title = styled.div``;
const Input = styled.div``;
const Button = styled.div``;
export const Sign = () => {
  return (
    <Wrap>
      <Form>
        <Title>{data[1].title}</Title>

        <Input type="text" placeholder={data[1].userid} />
        <Input type="password" placeholder={data[1].userpassword} />

        <Button>{data[1].button}</Button>
      </Form>
    </Wrap>
  );
};
