import { useState } from "react";
import AddForm from "./AddForm/AddForm";

function App() {
  const [toDoList, setToDoList] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);

  function handleAddToToDoList(title: string) {
    setToDoList((prev) => [
      ...prev,
      { id: Date.now(), title, completed: false },
    ]);
  }

  return (
    <main className="w-screen h-screen  flex items-center justify-center">
      <div className="rounded-lg bg-slate-100 px-2 min-w-[300px] text-center h-[90vh] relative">
        <h3 className="py-3">لیست کارها</h3>
        <hr />
        {toDoList.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
        <AddForm onAddToDoList={handleAddToToDoList} />
      </div>
    </main>
  );
}

export default App;
