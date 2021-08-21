import {DefaultNoteStateI} from "../reducers/NotesReducer";
import {ActionNoteType} from "../action-types";
import {ActionGlobalType} from "../action-types";

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

interface ChangeIfDarkMode{
    type: ActionGlobalType.CHANGE_IS_DARK_MODE
}

interface ChangeNotesOpen {
    type: ActionGlobalType.CHANGE_NOTES_OPEN
}

export type ActionGlobal = ChangeNotesOpen | ChangeIfDarkMode