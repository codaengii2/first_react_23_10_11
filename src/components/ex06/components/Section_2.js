import styled from "styled-components";
import { baseLayoutSize } from "../../../GlobalStyled";
import { fontSize } from "../../../GlobalStyled";

const Section = styled.section`
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;

const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  height: 400px;
  background-color: lightgray;
  background-image: url(${(props) => props.$bg});
  background-repeat: no-repeat;
  transition: 0.5s;
  background-position: center;
  background-size: cover;
  &:hover {
    opacity: 0.5;
  }
  // => & 자기자신을 선택 = $(this) 같은 느낌
`;

export const Section_2 = () => {
  return (
    <Section>
      <h3>두번째 섹션</h3>
      <ConWrap>
        <Con $bg="https://wallpapers.com/images/hd/abstract-background-6m6cjbifu3zpfv84.jpg"></Con>
        <Con $bg="https://cdn.imweb.me/upload/S202207202685e30f16e24/41f854bd38a2b.jpeg"></Con>
        <Con $bg="https://t1.daumcdn.net/brunch/service/user/8LOK/file/d0LZ8mYR5L0ZFf6vqc8buq8WkKE.jpg?download"></Con>
      </ConWrap>
    </Section>
  );
};
