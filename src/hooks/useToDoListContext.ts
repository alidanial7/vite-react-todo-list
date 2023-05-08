import { useContext } from "react";
import { TodoListContext } from "../Context/ToDoList/ToDoListProvider";

export function useToDoListContext() {
  const { toDoListState, toDoListDispatch } = useContext(TodoListContext);
  if (!toDoListState || !toDoListDispatch) {
    throw new Error("ToDoList provider not found!");
  }
  return { toDoListState, toDoListDispatch };
}
