import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Meanings from "./components/Meanings";
import DarkMode from "./components/DarkMode";
import { useState, useEffect } from "react";
import axios from "axios";
import { lightTheme, darkTheme } from "./themes.js";

const getStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const App = () => {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    const dictionaryApi = async () => {
      try {
        const data = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        );
        setMeanings(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    dictionaryApi();
  }, [word, category]);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <DarkMode theme={theme} themeToggler={themeToggler} />
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Meanings word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  transition: .6s;
  background: ${(props) => props.theme.body};
`;

export default App;
