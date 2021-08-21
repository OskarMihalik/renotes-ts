import {DefaultNoteStateI} from "../reducers/NotesReducer";
import {ActionGlobalType, ActionNoteType} from "../action-types";
import {Dispatch} from "redux";
import {Action, ActionGlobal} from "../actions";

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

export const changeActiveNoteIndex = (newActiveNoteIndex: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionNoteType.CHANGE_ACTIVE_NOTE_INDEX,
            payload: newActiveNoteIndex
        })
    }
}

export const changeNotesOpen = () => {
    return (dispatch: Dispatch<ActionGlobal>) =>{
        dispatch({
            type: ActionGlobalType.CHANGE_NOTES_OPEN
        })
    }
}

export const  changeIsDarkMode = () => {
    return (dispatch: Dispatch<ActionGlobal>) =>{
        dispatch({
            type: ActionGlobalType.CHANGE_IS_DARK_MODE
        })
    }
}