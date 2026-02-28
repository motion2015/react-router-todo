import { createContext, useState } from 'react';

interface Context {
  readonly toDoList: string[];

  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  /* eslint-disable @typescript-eslint/no-empty-function */
  onAdd: (): void => {},
  onDelete: (): void => {},
  /* eslint-disable @typescript-eslint/no-empty-function */
});

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const TodoListContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState(['리액트 공부하기', '운동하기', '책 읽기']);
  const onDelete = (toDo: string) => {
    setToDoList(toDoList.filter((item) => item !== toDo));
  };
  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };
  return (
    <ToDoListContext.Provider value={{ toDoList, onAdd, onDelete }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, TodoListContextProvider };
