import toast from "react-hot-toast";
import { FaTrash, FaEdit } from "react-icons/fa";

import randomDoneMessageGenerator from "../../../../utils/randomDoneMessageGenerator";
import { useEditIndexContext } from "../../../../hooks/ToDoListContext/useEditIndexContext";
import { useToDoListContext } from "../../../../hooks/useToDoListContext";

type Props = {
  toDoListItem: { id: number; title: string; completed: boolean };
};

function ListItem({ toDoListItem }: Props) {
  const { editIndexDispatch } = useEditIndexContext();
  const { toDoListDispatch } = useToDoListContext();

  function handleToggleComplete() {
    if (toDoListItem.completed) {
      toast.success("تسک مجدد فعال شد");
    } else {
      const randomMessage = randomDoneMessageGenerator();
      toast(randomMessage.title, {
        icon: randomMessage.icon,
      });
    }
    toDoListDispatch({ type: "TOGGLE_COMPLETED", payload: toDoListItem.id });
  }

  function handleDelete() {
    toast.success("تسک با موفقیت حذف شد");
    toDoListDispatch({ type: "DELETE_TODO", payload: toDoListItem.id });
  }
  return (
    <div
      className={`${
        toDoListItem.completed
          ? "border-lime-500 text-slate-400 line-through"
          : "border-slate-300 "
      } bg-slate-200 p-2 border-r-4 w-full  my-2 rounded-lg text-right flex items-center gap-2`}
    >
      <input
        type="checkbox"
        checked={toDoListItem.completed}
        value=""
        className="w-4 h-4"
        onChange={() => handleToggleComplete()}
      />
      <span className="w-full flex-1">{toDoListItem.title}</span>
      <button
        onClick={() => {
          editIndexDispatch({
            type: "SET_EDIT_INDEX",
            payload: toDoListItem.id,
          });
        }}
      >
        <FaEdit className="text-sm text-yellow-500" />
      </button>
      <button onClick={() => handleDelete()}>
        <FaTrash className="text-sm text-red-400" />
      </button>
    </div>
  );
}

export default ListItem;
