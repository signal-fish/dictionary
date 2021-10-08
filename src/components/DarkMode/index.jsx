import styled from "styled-components";

const DarkMode = ({theme, themeToggler}) => {
  return (
    <Container>
      <Wrapper onClick={() => themeToggler()}>
        <Bar></Bar>
        <Circle currentTheme={theme}></Circle>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 38px;
  height: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  background: #b6a7a7;
  border-radius: 15px;
`;

const Circle = styled.div`
  height: 21px;
  width: 21px;
  border: none;
  border-radius: 50%;
  position: absolute;
  background: #000;
  transition: 0.6s;
  transform: ${(props) =>
    props.currentTheme === "light" ? "translateX(90%)" : "translateX(0)"};
  z-index: 2;
`;

export default DarkMode;
