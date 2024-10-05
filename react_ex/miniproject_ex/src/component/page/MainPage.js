import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import data from '../../data.json';

const Wrapper = styled.div`
   padding: 16px;
   width: calc(100% - 32px);
   dispaly: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Container = styled.div`
   width: 100%;
   max-width: 720px;

   :not(:last-child){
      margin-bottom : 16px;
   }
`;

const MainPage = (props) => {

   const navigate = useNavigate();

   return(
      <Wrapper>
         <Container>
            <Button title='글 작성하기' onClick={() => {
                  navigate('/post-wirte')
            }}/>
         </Container>

         <PostList posts={data} onClickItem={(item) =>{navigate(`/post/${item.id}`)}} /> 

{/* 
onClickItem={(item) =>{navigate(/post/${item.id})}}:
onClickItem이라는 이름의 prop으로 함수를 전달합니다. 
이 함수는 리스트의 특정 아이템을 클릭했을 때 호출됩니다.
item 매개변수는 클릭된 아이템의 정보를 담고 있습니다.
navigate(/post/${item.id}): 클릭된 아이템의 id를 이용하여 /post/${item.id}라는 경로로 라우팅(페이지 이동)을 합니다. 즉, 클릭된 게시글의 상세 페이지로 이동하는 동작을 수행합니다. 
*/}
         
      </Wrapper>
   )
}

export default MainPage;