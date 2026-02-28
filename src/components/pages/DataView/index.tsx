import styled from '@emotion/styled';
import { ShowInputButton } from 'components/ShowInputButton/inex';
import { Title } from 'components/Title';
import { TodoList } from 'components/TodoList';
import { useNavigate } from 'react-router-dom';

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
  const navigator = useNavigate();
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList />
      <ShowInputButton show={false} onClick={()=>navigator('/add')} />
    </Container>
  );
};
