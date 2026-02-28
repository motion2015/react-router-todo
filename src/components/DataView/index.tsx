import styled from '@emotion/styled';
import { Title } from 'components/Title';
import { TodoList } from 'components/TodoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  width: 440px;
`;

export const DataView = () => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList />
    </Container>
  );
};
