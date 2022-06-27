import { MediaDiv, Main } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import WritePost from './WritePost';
import ShowPost from './ShowPost';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);

  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: '학보, 시사N 대학기자상 취재', replCount: 21 },
    ]);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
          <Main>
            <Slogun></Slogun>
            <Routes>
              <Route path = "/" element ={
                <ShowPostList></ShowPostList>
              }>
              </Route>
              <Route path ="/write" element={<WritePost></WritePost>}></Route>
              <Route path ="/post/:postID" element={<ShowPost></ShowPost>}></Route>
            </Routes>
            
          </Main>
          <Footer></Footer>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
