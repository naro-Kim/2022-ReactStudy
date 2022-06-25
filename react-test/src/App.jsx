import { MediaDiv, Main, PostListDiv } from "./styledComponent";
import Header from "./Header";
import Slogun from "./Slogun";
import ShowPostList from "./ShowPostList";
import Footer from "./Footer";

import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const initialPostList = [
    {
      id: 1,
      title: "",
      replCount: 1,
    },
    {
      id: 2,
      title: "",
      replCount: 43,
    },
    {
      id: 3,
      title: "",
      replCount: 2,
    },
  ];
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isPost, setPost] = useState(true);
  const [postList, setPostList] = useState(initialPostList);

  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "학보, 시사M 대학기자상 취재", replCount: 0 },
    ]);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darKMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <ShowPostList
              loading={loading}
              isPost={isPost}
              postList={postList}
              addPost={addPost}
            />
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
