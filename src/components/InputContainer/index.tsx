import { ShowInputButton } from 'components/ShowInputButton/inex';
import { ToDoInput } from 'components/ToDoInput';
import { useState } from 'react';

export const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const onClose = ()=>{
    setShowTodoInput(false);
  }

  return (
    <>
      <ShowInputButton show={showTodoInput} onClick={() => setShowTodoInput(!showTodoInput)} />
      {showTodoInput && <ToDoInput onClose={onClose} />}
    </>
  );
};
