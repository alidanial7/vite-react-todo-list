import EditForm from "./EditForm/EditForm";
import AddForm from "./AddForm/AddForm";
import { useEditIndexContext } from "../../../hooks/ToDoListContext/useEditIndexContext";

function ToDoListForms() {
  const { editIndexState } = useEditIndexContext();

  return editIndexState ? <EditForm /> : <AddForm />;
}

export default ToDoListForms;
