import { useContext } from "react";
import { TodoListContext } from "../../Context/ToDoList/ToDoListProvider";
import { ToDoListItemType } from "../../Types";

export function useGetToDoListObject(id: number): ToDoListItemType | undefined {
  const { toDoListState } = useContext(TodoListContext);
  return toDoListState.find((object) => object.id === id);
}
