import {DefaultNoteStateI} from "../reducers/NotesReducer";
import {ActionNoteType} from "../action-types";

interface AddNoteAction {
    type: ActionNoteType.ADD_NOTE,
    payload: DefaultNoteStateI,
}

interface DeleteNoteAction{
    type: ActionNoteType.DELETE_ACTIVE_NOTE
}
interface ChangeActiveNoteIndex {
    type: ActionNoteType.CHANGE_ACTIVE_NOTE_INDEX,
    payload: number,
}

export type Action = AddNoteAction | DeleteNoteAction | ChangeActiveNoteIndex