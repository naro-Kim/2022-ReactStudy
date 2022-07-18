import React, { useState } from 'react';
import {
  ContentsInput,
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
} from './styledComponent';
import WriteTitle from './WriteTitle';
import InputPost from './InputPost';

const WritePost = () => {
  const [inputs, setInputs] = useState({
    title: '',
    contents: '',
  });
  const { title, contents } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const SubmitComponent = () => (
    <PostSubmitDiv>
      <PostSubmit>작성완료</PostSubmit>
    </PostSubmitDiv>
  )

  return (
    <PostSection>
      <WriteTitle />
      <PostWriteDiv>
        <InputPost 
            onChange = {onChange}
            title = {title}
            contents = {contents}
        ></InputPost>
      </PostWriteDiv>
      <SubmitComponent></SubmitComponent>
    </PostSection>
  );
}

export default WritePost;
