import styled from '@emotion/styled';
import { TodoItem } from 'components/TodoITem';
import { ToDoListContext } from 'contexts/TodoList';
import { useContext } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-item: flex-start;
`;

export const TodoList = () => {
  const {toDoList, onDelete} = useContext(
    ToDoListContext
  );
  return (
    <Container>
      {toDoList.map((todo) => (
        <TodoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};
