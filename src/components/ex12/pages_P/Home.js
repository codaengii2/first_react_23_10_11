import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { data } from "../api";

const Banner = styled.section`
  height: 80vh;
  background-color: lightgray;
`;

const Section = styled.section`
  max-width: 1400px;
  width: 100%;
  padding: 150px 10%;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 45%;
  height: 600px;
  background: url(${(props) => props.$bg}) no-repeat center / cover;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  &:hover {
    transform: translate(20px, 20px);
    box-shadow: none;
  }
  a {
    width: 100%;
    height: 600px;
    display: block;
  }
`;

export const Home = () => {
  const { id } = useParams();
  return (
    <div>
      <Banner></Banner>
      <Section>
        <Con $bg={data[0].img}>
          <Link to={"/sub/0"}></Link>
        </Con>
        <Con $bg={data[1].img}>
          <Link to={"/sub/1"}></Link>
        </Con>
      </Section>
    </div>
  );
};
