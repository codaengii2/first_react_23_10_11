import { Link } from "react-router-dom";
import styled from "styled-components";

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
  background-color: lightgray;
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
  return (
    <div>
      <Banner></Banner>
      <Section>
        <Con>
          <Link to={"/sub01"}></Link>
        </Con>
        <Con>
          <Link to={"/sub01"}></Link>
        </Con>
      </Section>
    </div>
  );
};
