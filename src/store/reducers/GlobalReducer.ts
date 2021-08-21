import {ActionGlobal} from "../actions";
import {ActionGlobalType} from "../action-types";

interface DefaultGlobalState {
    areNotesOpen: boolean,
    isDarkMode: boolean,
}

const defaultState: DefaultGlobalState = {
    areNotesOpen: true,
    isDarkMode: false
}

export const globalReducer = (state = defaultState, action: ActionGlobal): DefaultGlobalState => {
    switch (action.type){
        case ActionGlobalType.CHANGE_NOTES_OPEN:
            return {
                ...state,
                areNotesOpen: !state.areNotesOpen,
            }
        case ActionGlobalType.CHANGE_IS_DARK_MODE:
            return {
                ...state,
                isDarkMode: !state.isDarkMode,
            }
        default: {
            return state
        }
    }
}