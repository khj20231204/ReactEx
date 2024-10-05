import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';

//MainPage에서 뿌려주는 List
//MainPage에서 넘겨주는 props

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;

   :not(:last-child) {
      margin-bottom: 16px;
   }
`;

const PostList = (props) => {
   const {posts, onClickItem } = props;

   return (
      <Wrapper>
         {posts.map((post, index) => {
            return(
               <PostListItem key={post.id} post={post} onClick={()=>{onClickItem(post)}}/>
            )
         })}
      </Wrapper>
   )
}

export default PostList;