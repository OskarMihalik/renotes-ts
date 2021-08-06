import {DefaultNoteStateI} from "../reducers/NotesReducer";
import {ActionNoteType} from "../action-types";

interface AddNoteAction {
    type: ActionNoteType.ADD_NOTE,
    payload: DefaultNoteStateI,
}

interface DeleteNoteAction{
    type: ActionNoteType.DELETE_ACTIVE_NOTE
}

export type Action = AddNoteAction | DeleteNoteAction