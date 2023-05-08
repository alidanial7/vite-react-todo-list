import { useContext } from "react";
import { TodoListContext } from "../../Context/ToDoList/ToDoListProvider";

export function useEditIndexContext() {
  const { editIndexState, editIndexDispatch } = useContext(TodoListContext);

  if ((!editIndexState && editIndexState !== 0) || !editIndexDispatch) {
    throw new Error("ToDoList provider not found!");
  }
  return { editIndexState, editIndexDispatch };
}
