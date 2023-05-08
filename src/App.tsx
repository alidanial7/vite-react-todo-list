import Header from "./components/ToDoList/Header/Header";
import { Toaster } from "react-hot-toast";
import { TodoListProvider } from "./Context/ToDoList/ToDoListProvider";
import ToDoListForms from "./components/ToDoList/ToDoListForms/ToDoListForms";
import ToDoListItems from "./components/ToDoList/ToDoListItems/ToDoListItems";

function App() {
  return (
    <TodoListProvider>
      <main className="w-screen h-screen bg-slate-300  flex items-center justify-center">
        <div className="rounded-xl bg-slate-100 px-2 md:px-3 w-[300px] md:w-[400px] text-center max-h-[600px] h-[90vh] flex flex-col justify-between">
          <Header />
          <ToDoListItems />
          <ToDoListForms />
        </div>
        <Toaster position="bottom-center" />
      </main>
    </TodoListProvider>
  );
}

export default App;
