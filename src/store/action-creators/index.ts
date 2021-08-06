import {DefaultNoteStateI} from "../reducers/NotesReducer";
import {ActionNoteType} from "../action-types";
import {Dispatch} from "redux";
import {Action} from "../actions";

export const addNote = (note: DefaultNoteStateI) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionNoteType.ADD_NOTE,
            payload: note
        })
    }
}

export const deleteActiveNote = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionNoteType.DELETE_ACTIVE_NOTE,
        })
    }
}