import { useEffect, useState } from "react";

import { useGetToDoListObject } from "../../../../hooks/ToDoListContext/useGetToDoListObject";
import { useEditIndexContext } from "../../../../hooks/ToDoListContext/useEditIndexContext";
import { useToDoListContext } from "../../../../hooks/useToDoListContext";

export default function EditForm() {
  const [editObjectTitle, setEditObjectTitle] = useState<string>("");

  const { editIndexState, editIndexDispatch } = useEditIndexContext();
  const { toDoListDispatch } = useToDoListContext();
  const selectedToDoListObject = useGetToDoListObject(editIndexState);

  useEffect(() => {
    setEditObjectTitle(selectedToDoListObject?.title || "");
  }, [selectedToDoListObject]);

  function handleEditItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (editIndexState && selectedToDoListObject) {
      toDoListDispatch({
        type: "EDIT_TODO",
        payload: {
          id: editIndexState,
          title: editObjectTitle,
          completed: selectedToDoListObject?.completed,
        },
      });
      editIndexDispatch({ type: "SET_EDIT_INDEX", payload: 0 });
    }
  }

  function cancelEdit() {
    editIndexDispatch({ type: "SET_EDIT_INDEX", payload: 0 });
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
        onChange={(event) => setEditObjectTitle(event.target.value)}
        value={editObjectTitle}
      />
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white rounded-xl w-full p-2 disabled:bg-slate-200 disabled:text-slate-400"
          disabled={!editObjectTitle.length ? true : false}
          type="submit"
        >
          ویرایش
        </button>
        <button
          className="bg-red-500 text-white rounded-xl w-full p-2 disabled:bg-slate-200 disabled:text-slate-400"
          type="button"
          onClick={() => cancelEdit()}
        >
          انصراف
        </button>
      </div>
    </form>
  );
}
