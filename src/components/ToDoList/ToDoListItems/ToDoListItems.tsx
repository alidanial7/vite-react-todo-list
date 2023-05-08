import ListItem from "./ListItem/ListItem";
import { useToDoListContext } from "../../../hooks/useToDoListContext";

function ToDoListItems() {
  const { toDoListState } = useToDoListContext();
  if (toDoListState.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-10">
        <img src="/empty.svg" className="w-50" alt="empty" />
        <span>لیست شما خالی است!</span>
      </div>
    );
  }
  return (
    <div className="overflow-y-auto flex-1">
      {toDoListState
        .filter((item) => !item.completed)
        .map((toDoListItem) => (
          <ListItem key={toDoListItem.id} toDoListItem={toDoListItem} />
        ))}
      {toDoListState
        .filter((item) => item.completed)
        .map((toDoListItem) => (
          <ListItem key={toDoListItem.id} toDoListItem={toDoListItem} />
        ))}
    </div>
  );
}

export default ToDoListItems;
