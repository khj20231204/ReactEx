import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import axios from 'axios';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;


function PostWritePage(props) {       // 글작성 컴포넌트
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const insert=()=>{
        alert('insert함수');
        axios.post("http://localhost/write", {
            'title': title,
            'content': content
        }).then(function (response) {
            console.log(response)
//          navigate('/')
        }).catch(function (error) {
            console.log(error)    
        })
        navigate('/')
    }

    return (
        <Wrapper>
            <Container>
                {/* <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                /> */}
                {/* <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                /> */}

                {/* <Button
                    title='글 작성하기'
                    onClick={() => {
                        navigate('/');
                    }}
                /> */}
                    
                <input 
                    width={300}
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <textarea
                    rows={20}
                    cols={100}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

                <button onClick={()=>insert()}>글작성하기</button>

            </Container>
        </Wrapper>
    );
}

export default PostWritePage;
