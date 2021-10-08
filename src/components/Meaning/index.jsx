import styled from "styled-components"

const Meaning = ({definition}) => {
  return (
    <Container>
      <Definition>{definition.definition}</Definition>
      <Hr />
      {definition.example && (
        <Example>
          <Span>Example: </Span> {definition.example}
        </Example>
      )}
      {definition.synonyms && (
        <Synonyms>
          <Span>Synonyms: </Span> {definition.synonyms.map((s) => `${s}, `)}
        </Synonyms>
      )}
    </Container>
  );
};

const Container = styled.div`
  background: cyan;
  margin: 20px 0;
  padding: 10px;
  border-radius: 10px;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const Definition = styled.p`
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const Hr = styled.hr`
  margin: 5px 0;
  border: 1px solid ${(props) => props.theme.fontColor};
`;

const Example = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
`;

const Synonyms = styled.p`
  margin: 0;
  padding: 0;
`;

const Span = styled.span`
  font-weight: 700;
`;
export default Meaning
