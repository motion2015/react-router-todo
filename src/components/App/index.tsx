import styled from '@emotion/styled';
import { DataView } from 'components/pages/DataView';
import { InputContainer } from 'components/InputContainer';
import { TodoListContextProvider } from 'contexts/TodoList';
import { Route, Routes } from 'react-router-dom';
import { ToDoInput } from 'components/pages/ToDoInput';

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const NotFount = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <TodoListContextProvider>
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
