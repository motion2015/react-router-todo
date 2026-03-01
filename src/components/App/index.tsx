import styled from '@emotion/styled';
import { DataView } from 'components/pages/DataView';
import { InputContainer } from 'components/InputContainer';
import { TodoListContextProvider } from 'contexts/TodoList';
import { Route, Routes } from 'react-router-dom';
import { ToDoInput } from 'components/pages/ToDoInput';
import Header from 'components/Header';
import { BlogPost } from 'components/BlogPost';
import { useEffect, useState } from 'react';
import mockPosts from 'mock/posts.json';
import { Button } from 'components/BasicButton';
import { Title } from 'components/Title';
interface Post {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}
const Container = styled.div`
  position: relative;

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
`;
const NotFount = styled.div`
  text-align: center;
`;

function App() {
  const [posts, setPosts] = useState<ReadonlyArray<Post> | null>([]);
  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPosts);
    }, 1000);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Container>
      <TodoListContextProvider>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <DataView />
                {/* <InputContainer /> */}
              </>
            }
          ></Route>
          <Route
            path="/posts"
            element={
              <>
                <Title label="블로그 포스트"></Title>
                <main>
                  {posts?.map((post) => (
                    <BlogPost key={post.id} title={post.title} body={post.body} />
                  ))}
                </main>
                <ButtonContainer>
                  <Button label="등록" onClick={() => alert('Load More')} />
                </ButtonContainer>
              </>
            }
          ></Route>
          <Route path="/add" element={<ToDoInput />} />
          <Route
            path="*"
            element={
              <NotFount>
                404
                <br />
                Not FOUND
              </NotFount>
            }
          ></Route>
        </Routes>
      </TodoListContextProvider>
    </Container>
  );
}

export default App;
