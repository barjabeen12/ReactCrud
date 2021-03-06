import React, { useState, useEffect } from "react";
import {Container, Row} from "react-bootstrap"
import PostCard from "./Card"
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import Pagination from "./Pagination"
function Posts() {
    const [posts, setPosts] = useState();
    const [pages, setPages] = useState();
    useEffect(() => {
        let mounted = true;
        if(mounted){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setPosts(json);
                

            });
          
        }
          
          return () => mounted = false;
          },[] );
    return (
        <Container>
            <h2 style={{marginTop:"40px"}}>Current Posts</h2>
            <Content>
             
            {
                posts ? (
                    <Row >
                    {posts.length > 0 ? (
                     <>
                    <Pagination
                    data={posts}
                    RenderComponent={PostCard}
                    pageLimit={5}
                    dataLimit={12}
                     />
                    </>
      ) : (
       <h1>No Posts to display</h1>
      )}
                    </Row>
                  
                ):(
                    <Container>
                        <Content>
                         <CircularProgress  />
                        </Content>
                    </Container>
                )
            }
                  
         
                  
        
         </Content>
        
        </Container>
    )
}

export default Posts
const Content = styled.div`
margin-top: 1%;
margin-bottom:5%;
display: flex;
justify-content: center; 
`
