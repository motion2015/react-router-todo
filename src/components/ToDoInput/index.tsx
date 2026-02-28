import styled from '@emotion/styled';
import { Button } from 'components/BasicButton';
import { TextInput } from 'components/TextInput';
import { Title } from 'components/Title';
import { useState, useContext } from 'react';
import { ToDoListContext } from 'contexts/TodoList';

interface Props {
  readonly onClose: () => void;
}
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  align-items: stretch;
`;

export const ToDoInput = ({ onClose }: Props) => {
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setTodo] = useState('');
  const onAddTodo = () => {
    if (toDo === '') return;

    onAdd(toDo);
    setTodo('');
    onClose();
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title label="할 일 추가" />
        <InputContainer>
          <TextInput
            value={toDo}
            onChange={setTodo}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onAddTodo();
              }
            }}
          />
          <Button label="추가" color="#304ffe" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};
