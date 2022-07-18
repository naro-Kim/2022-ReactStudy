import React, {useState, useEffect, useCallback } from 'react';
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  PostListDiv,
  PagingSection,
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  CursorDiv,
} from './styledComponent';

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import EachPost from './EachPost';

const initialPostList = [
  {id: 1, title: '학보, 시사N 대학기자상 취재' },
  {id: 2, title: '학보, 시사N 대학기자상 취재' },
  {id: 3, title: '학보, 시사N 대학기자상 취재' },
];

function ShowPostList() {
  const [loading, setLoading] = useState(true);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get('https://reactapitest.pythonanywhere.com/api/list/?page=1&page_size=10').then(response=>{
      console.log(response);
    })
  }, [])

  const addPost = useCallback(() => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: '학보, 시사N 대학기자상 취재', replCount: 21 },
    ]);
  }, [postList]);

  const navigate = useNavigate();
  const goWrite = () => {
    navigate('/write');
  };
  /*
    React Hook, useEffect  
  */
  useEffect(() => {
    setTimeout(() =>{ 
      setPostList(initialPostList);
      setLoading(false);
    }, 200);
  }, []);

  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
          <PostTitle>익명게시판</PostTitle>
          <CursorDiv>
            <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
          </CursorDiv>
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={'./loading.svg'} />
              {/* loading.io */}
            </LoadingDiv>
          ) : isPost ? (
            <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  title={element.title}
                  postID={element.postID}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>

      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        <PagenumberDiv>2</PagenumberDiv>

        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
}

export default ShowPostList;
