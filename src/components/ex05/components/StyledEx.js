import { render } from "@testing-library/react";
import styled from "styled-components";
//styled를 import 해야 작동

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
`;
//같은 모양에서 속성하나 다른 두 박스는 컴포넌트 속성값에 변수를 추가하여 원하는 속성을 넣고
//props 처리를 해주면 적용 된다
// ${(props) => props.bgColor};
//$변수명 앞에 $기호를 적어주면 오류가 해결된다ㅏ
const Box_2 = styled.div`
  width: 300px;
  height: 500px;
  background-color: antiquewhite;
  border: 10px solid #000;
  text-align: center;
  font: 900 40px/500px "";
  color: #000099;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inbox = styled.div`
  width: 200px;
  height: 400px;
  background-color: #000;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 40px;
  background-color: aquamarine;
`;

export const StyledEx = () => {
  return (
    <div>
      <Box $bgColor="pink"></Box>
      <Box $bgColor="yellow"></Box>
      {/* <Box_2>
        <Inbox></Inbox>
      </Box_2> */}
      <Button>prev</Button>
      <Button>next</Button>
    </div>
  );
};
