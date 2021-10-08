import styled from "styled-components";
import Meaning from "../Meaning";
import { mobile, tablet, laptopPro } from "../../responsive";

const Meanings = ({ word, category, meanings}) => {
  return (
    <Container>
      <Wrapper>
        {meanings[0] && word && category === "en" && (
          <Audio
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            controls
          >
            Your browser doesn't support audio element.
          </Audio>
        )}

        {word === "" ? (
          <SubTitle>Start by typing a word in Search</SubTitle>
        ) : (
          meanings.map((meaning) =>
            meaning.meanings.map((item) =>
              item.definitions.map((definition) => (
                <Meaning definition={definition} />
              ))
            )
          )
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  ${mobile({ marginTop: "10px" })}
`;

const Wrapper = styled.div`
  width: 60%;
  height: 50vh;
  padding: 30px;
  background: ${(props) => props.theme.meaningsBg};
  overflow: scroll;
  scrollbar-width: thin;
  border: 8px solid #000;
  border-radius: 8px;

  ${laptopPro({
    width: "70%",
  })}

  ${tablet({
    width: "80%",
  })}

  ${mobile({
    border: "none",
    padding: "10px",
    width: "95%",
  })}
`;

const Audio = styled.audio`
width: 100%;
`;

const SubTitle = styled.h2`
  margin: 0;
  font-size: 50px;
  color: ${(props) => props.theme.fontColor};

  ${mobile({
    fontSize: "25px",
  })}
`;
export default Meanings;
