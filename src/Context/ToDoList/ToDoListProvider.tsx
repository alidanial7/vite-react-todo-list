import { createContext, useReducer } from "react";

import { toDoListReducer } from "./toDoListReducer";
import { editIndexReducer } from "./editIndexReducer";
import {
  EditIndexStateType,
  ToDoListContextType,
  ToDoListItemType,
  ToDoListProviderType,
} from "./Types";

const toDoListInitialState: ToDoListItemType[] = [];
const editIndexInitialState: EditIndexStateType = 0;

export const TodoListContext = createContext<ToDoListContextType>({
  toDoListState: [],
  toDoListDispatch: () => {
    console.warn("Dispatch not implemented!");
  },
  editIndexState: 0,
  editIndexDispatch: () => {
    console.warn("Dispatch not implemented!");
  },
});

export const TodoListProvider = ({ children }: ToDoListProviderType) => {
  const [toDoListState, toDoListDispatch] = useReducer(
    toDoListReducer,
    toDoListInitialState
  );
  const [editIndexState, editIndexDispatch] = useReducer(
    editIndexReducer,
    editIndexInitialState
  );
  return (
    <TodoListContext.Provider
      value={{
        toDoListState,
        toDoListDispatch,
        editIndexState,
        editIndexDispatch,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
