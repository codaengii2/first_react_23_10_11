import { useParams } from "react-router-dom";
import styled from "styled-components";
import { data } from "../api";

// console.log(data);

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 48%;
  height: 600px;
  background-color: lightgray;
  background-image: url(${(props) => props.$bg});
  background-repeat: no-repeat;
`;

const Title = styled.div`
  width: 48%;
  padding-top: 50px;
  h3 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    color: #808080;
    font-size: 18px;
  }
`;

export const Sub = () => {
  const { id } = useParams(); //=> url에 있는 변수값을 얻어옴
  // console.log(params); // => 내가 정의한 id를 받아올 수 있음
  // console.log(params.id); // => 객체 비구조화 할당

  // console.log(id);

  // 현재페이지에서 입력한 url 몇번째 페이지 => DB 요청 (request)
  // => DB에서 응답 (respon)

  // console.log(data[id].title);

  return (
    <Section>
      <Bg $bg={data[id].img} />
      <Title>
        <h3>{data[id].title}</h3>
        <p>{data[id].desc}</p>
      </Title>
    </Section>
  );
};
