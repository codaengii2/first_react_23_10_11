import { Link } from "react-router-dom";
import styled from "styled-components";
const SSection = styled.section`
  width: 100%;
  height: 500px;
`;

const Container = styled.div`
  width: 60%;
  height: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;

const Img01 = styled.div`
  width: 400px;
  height: 600px;
  background-image: url(${(props) => props.$img});
  box-shadow: 5px 5px 15px dimgray;
`;

const Img02 = styled.div`
  width: 400px;
  height: 600px;
  background-image: url(${(props) => props.$img});
  box-shadow: 5px 5px 15px dimgray;
`;

export const Section = () => {
  return (
    <SSection>
      <Container>
        <Link to={"/menu01"}>
          <Img01 $img="https://i.pinimg.com/originals/6a/aa/ab/6aaaab354709ef2fa16fbd72299c8f55.jpg" />
        </Link>

        <Link to={"/menu02"}>
          <Img02 $img="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg" />
        </Link>
      </Container>
    </SSection>
  );
};
