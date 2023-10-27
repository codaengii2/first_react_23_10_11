import styled from "styled-components";

const Wrap = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 50px auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.div`
  width: 800px;
  height: 800px;
  background-image: url(${(props) => props.$bg});
`;
const Title = styled.div`
  margin-left: 50px;
`;

export const Menu01 = () => {
  return (
    <Wrap>
      <Img $bg="https://i.pinimg.com/originals/6a/aa/ab/6aaaab354709ef2fa16fbd72299c8f55.jpg"></Img>
      <Title>
        <h3>Menu01</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          recusandae dolore ab doloremque cumque quae nemo magnam porro dolorum,
          ratione rem veniam. Nostrum voluptas, aliquam animi beatae nulla
          delectus laborum?
        </p>
      </Title>
    </Wrap>
  );
};
