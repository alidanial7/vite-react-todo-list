import { useState } from "react";
import AddForm from "./components/AddForm/AddForm";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import EditForm from "./components/EditForm/EditForm";
import { Toaster, toast } from "react-hot-toast";
import { ToDoListItemType } from "./Types";
import randomDoneMessageGenerator from "./utils/randomDoneMessageGenerator";

function App() {
  const [toDoListItems, setToDoListItems] = useState<ToDoListItemType[]>([]);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editObject, setEditObject] = useState<ToDoListItemType>();

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
    const randomMessage = randomDoneMessageGenerator();
    toast(randomMessage.title, {
      icon: randomMessage.icon,
    });
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
    toast.success("تسک مجدد فعال شد");
  }

  function onEditItem(id: number, title: string) {
    setToDoListItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, title };
        }
        return item;
      })
    );
    setIsEditing(false);
    toast.success("تسک با موفقیت ویرایش شد");
  }

  function onEditClicked(id: number) {
    const item = toDoListItems.find((item) => item.id === id);
    if (item) {
      setIsEditing(true);
      setEditObject(item);
    }
  }

  function onDeleteItem(id: number) {
    setToDoListItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("تسک با موفقیت حذف شد");
  }

  return (
    <main className="w-screen h-screen bg-slate-300  flex items-center justify-center">
      <div className="rounded-xl bg-slate-100 px-2 md:px-3 w-[300px] md:w-[400px] text-center max-h-[600px] h-[90vh] flex flex-col justify-between">
        <Header />
        <ToDoList
          toDoListItems={toDoListItems}
          onCompleteItem={onCompleteItem}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditClicked}
          onUndoCompleteItem={onUndoCompleteItem}
        />
        {isEditing && editObject ? (
          <EditForm
            editObject={editObject}
            onEdit={onEditItem}
            onGiveUp={() => setIsEditing(false)}
          />
        ) : (
          <AddForm onAddToDoList={handleAddToToDoList} />
        )}
      </div>
      <Toaster position="bottom-center" />
    </main>
  );
}

export default App;
