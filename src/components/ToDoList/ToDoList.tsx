import { useEffect, useState } from "react";
import ListItem from "./ListItem/ListItem";

type Props = {
  toDoListItems: { id: number; title: string; completed: boolean }[];
  onCompleteItem: (id: number) => void;
  onUndoCompleteItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
};

function ToDoList({
  toDoListItems,
  onCompleteItem,
  onUndoCompleteItem,
  onDeleteItem,
}: Props) {
  if (toDoListItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-10">
        <img src="/empty.svg" className="w-50" alt="empty" />
        <span>لیست شما خالی است!</span>
      </div>
    );
  }
  return (
    <div className="overflow-y-auto flex-1">
      {toDoListItems
        .filter((item) => !item.completed)
        .map((toDoListItem) => (
          <ListItem
            key={toDoListItem.id}
            toDoListItem={toDoListItem}
            onComplete={(id) => onCompleteItem(id)}
            onDelete={(id) => onDeleteItem(id)}
            onUndoComplete={(id) => onUndoCompleteItem(id)}
          />
        ))}
      {toDoListItems
        .filter((item) => item.completed)
        .map((toDoListItem) => (
          <ListItem
            key={toDoListItem.id}
            toDoListItem={toDoListItem}
            onComplete={(id) => onCompleteItem(id)}
            onDelete={(id) => onDeleteItem(id)}
            onUndoComplete={(id) => onUndoCompleteItem(id)}
          />
        ))}
    </div>
  );
}

export default ToDoList;
