import styled from "styled-components";
import { mobile, tablet, tabletPro, laptopPro } from "../../responsive";
import categories from "../../data";

const Header = ({ category, setCategory, word, setWord }) => {
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <Container>
      <Wrapper>
        <Title>{word ? word : "Word Hunt"}</Title>
        <Inputs>
          <Input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="search a word"
          ></Input>
          <Select
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((category) => (
              <Option key={category.label} value={category.label}>
                {category.value}
              </Option>
            ))}
          </Select>
        </Inputs>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 35vh;

  ${mobile({
    height: "40vh",
  })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  padding: 40px 0;
  font-size: 110px;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.fontColor};

  ${laptopPro({
    fontSize: "100px",
  })}

  ${tabletPro({
    fontSize: "80px",
  })}

  ${tablet({
    fontSize: "70px",
  })}

  ${mobile({
    fontSize: "40px",
  })}
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    flexDirection: "column",
  })}
`;

const Input = styled.input`
  width: 30%;
  margin: 20px;
  height: 40px;
  font-size: 25px;
  padding-left: 10px;
  background: transparent;
  border-bottom: 3px solid ${(props) => props.theme.fontColor};
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  color: ${(props) => props.theme.fontColor};

  &:focus {
    outline: none;
  }

  ${laptopPro({
    width: "35%",
  })}

  ${tablet({
    width: "40%",
  })}

  ${mobile({
    width: "80%",
    marginTop: "-20px",
  })}
`;

const Select = styled.select`
  width: 30%;
  margin: 20px;
  height: 44px;
  font-size: 20px;
  padding-left: 6px;
  background: transparent;
  border-bottom: 3px solid ${(props) => props.theme.fontColor};
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  color: ${(props) => props.theme.fontColor};

  &:focus {
    outline: none;
  }

  ${laptopPro({
    width: "35%",
  })}

  ${tablet({
    width: "40%",
  })}

  ${mobile({
    width: "calc(83% + 3px)",
    marginTop: 0,
  })}
`;

const Option = styled.option``;

export default Header;
