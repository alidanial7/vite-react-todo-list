import { EditIndexActionType, EditIndexStateType } from "./Types";

export function editIndexReducer(
  _editObjectState: EditIndexStateType | never,
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
