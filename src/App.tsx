import { useState } from "react";
import AddForm from "./components/AddForm/AddForm";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [toDoListItems, setToDoListItems] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);

  function handleAddToToDoList(title: string) {
    setToDoListItems((prev) => [
      ...prev,
      { id: Date.now(), title, completed: false },
    ]);
  }

  function onCompleteItem(id: number) {
    setToDoListItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }
  function onUndoCompleteItem(id: number) {
    setToDoListItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  function onDeleteItem(id: number) {
    setToDoListItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <main className="w-screen h-screen bg-slate-400  flex items-center justify-center">
      <div className="rounded-xl bg-slate-100 px-2 md:px-3 w-[300px] md:w-[400px] text-center max-h-[600px] h-[90vh] flex flex-col justify-between">
        <Header />
        <ToDoList
          toDoListItems={toDoListItems}
          onCompleteItem={onCompleteItem}
          onDeleteItem={onDeleteItem}
          onUndoCompleteItem={onUndoCompleteItem}
        />

        <AddForm onAddToDoList={handleAddToToDoList} />
      </div>
    </main>
  );
}

export default App;
