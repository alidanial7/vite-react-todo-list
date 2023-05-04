import { useState } from "react";

type Props = {
  onAddToDoList: (title: string) => void;
};

export default function AddForm({ onAddToDoList }: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  //TODO: set focus to input
  //TODO: add validation
  function handleAddToList(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddToDoList(inputValue);
    setInputValue("");
  }

  return (
    <form
      onSubmit={(e) => handleAddToList(e)}
      className="w-full flex gap-2 px-2 flex-col my-2"
    >
      <input
        type="text"
        placeholder="عنوان کار جدید"
        className="w-full rounded-xl outline-none border-slate-300 border-2 p-2 focus:border-blue-500"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <button
        className="bg-blue-500 text-white rounded-xl w-full p-2 disabled:bg-slate-200 disabled:text-slate-400"
        disabled={!inputValue}
        type="submit"
      >
        اضافه کردن
      </button>
    </form>
  );
}
