import { useState } from "react";
import { ToDoListItemType } from "../../Types";

type Props = {
  editObject: ToDoListItemType;
  onEdit: (id: number, title: string) => void;
  onGiveUp: () => void;
};

export default function EditForm({ onEdit, editObject, onGiveUp }: Props) {
  const [editInput, setEditInput] = useState<string>(editObject.title);
  function handleEditItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onEdit(editObject.id, editInput);
  }

  return (
    <form
      onSubmit={(e) => handleEditItem(e)}
      className="w-full flex gap-2 px-2 flex-col my-2"
    >
      <input
        type="text"
        placeholder="عنوان کار جدید"
        className="w-full rounded-xl outline-none border-slate-300 border-2 p-2 focus:border-blue-500"
        onChange={(event) => setEditInput(event.target.value)}
        value={editInput}
      />
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white rounded-xl w-full p-2 disabled:bg-slate-200 disabled:text-slate-400"
          disabled={!editObject.title}
          type="submit"
        >
          ویرایش
        </button>
        <button
          className="bg-red-500 text-white rounded-xl w-full p-2 disabled:bg-slate-200 disabled:text-slate-400"
          type="button"
          onClick={() => onGiveUp()}
        >
          انصراف
        </button>
      </div>
    </form>
  );
}
