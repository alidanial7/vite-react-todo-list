import { ToDoListActionType, ToDoListItemType } from "./Types";

export function toDoListReducer(
  toDoListState: ToDoListItemType[],
  { type, payload }: ToDoListActionType
) {
  switch (type) {
    case "ADD_TODO":
      return [
        ...toDoListState,
        {
          id: new Date().getTime(),
          title: payload.title,
          completed: false,
        },
      ];

    case "TOGGLE_COMPLETED": {
      return toDoListState.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    }

    case "EDIT_TODO": {
      return toDoListState.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, title: payload.title };
        }
        return todo;
      });
    }

    case "DELETE_TODO": {
      return toDoListState.filter((todo) => todo.id !== payload);
    }
    default:
      throw new Error();
  }
}
