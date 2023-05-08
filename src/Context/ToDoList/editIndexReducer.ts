import { EditIndexActionType, EditIndexStateType } from "./Types";

export function editIndexReducer(
  editObjectState: EditIndexStateType,
  action: EditIndexActionType
) {
  switch (action.type) {
    case "SET_EDIT_INDEX": {
      return action.payload;
    }

    default:
      throw new Error();
  }
}
