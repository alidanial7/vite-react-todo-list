export type ToDoListProviderType = {
  children: React.ReactNode;
};

/* -------------------------------------------------------------------------- */
/*                                 To do list                                 */
/* -------------------------------------------------------------------------- */
export type ToDoListItemType = {
  id: number;
  title: string;
  completed: boolean;
};

export type ToDoListActionType =
  | { type: "ADD_TODO"; payload: { title: string } }
  | { type: "TOGGLE_COMPLETED"; payload: number }
  | { type: "EDIT_TODO"; payload: ToDoListItemType }
  | { type: "DELETE_TODO"; payload: number };

type ToDoListStateType = ToDoListItemType[];

type ToDoListDispatchType = (action: ToDoListActionType) => void;

/* -------------------------------------------------------------------------- */
/*                                 Edit index                                 */
/* -------------------------------------------------------------------------- */

export type EditIndexActionType = {
  type: "SET_EDIT_INDEX";
  payload: number;
};

export type EditIndexStateType = number;

type EditIndexDispatchType = (action: EditIndexActionType) => void;

/* -------------------------------------------------------------------------- */
/*                                full context                                */
/* -------------------------------------------------------------------------- */

export type ToDoListContextType = {
  toDoListState: ToDoListStateType;
  toDoListDispatch: ToDoListDispatchType;
  editIndexState: EditIndexStateType;
  editIndexDispatch: EditIndexDispatchType;
};
