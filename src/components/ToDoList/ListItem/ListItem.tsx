import { FaRegCircle, FaCircle, FaUndo, FaTrash } from "react-icons/fa";

type Props = {
  toDoListItem: { id: number; title: string; completed: boolean };
  onComplete: (id: number) => void;
  onUndoComplete: (id: number) => void;
  onDelete: (id: number) => void;
};

function ListItem({
  toDoListItem,
  onComplete,
  onUndoComplete,
  onDelete,
}: Props) {
  return (
    <div
      className={`${
        toDoListItem.completed
          ? "border-blue-300 text-slate-400 line-through"
          : "border-slate-300 "
      } bg-slate-200 p-2 border-r-4 w-full  my-2 rounded-lg text-right flex items-center gap-2`}
    >
      {toDoListItem.completed ? (
        <button onClick={() => onUndoComplete(toDoListItem.id)}>
          <FaUndo className="text-md text-lime-500" />
        </button>
      ) : (
        <button
          onClick={() => onComplete(toDoListItem.id)}
          disabled={toDoListItem.completed}
        >
          <FaRegCircle className="text-xl text-blue-400" />
        </button>
      )}
      <span className="w-full flex-1">{toDoListItem.title}</span>

      <button onClick={() => onDelete(toDoListItem.id)}>
        <FaTrash className="text-sm text-red-400" />
      </button>
    </div>
  );
}

export default ListItem;
