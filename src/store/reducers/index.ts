import {combineReducers} from 'redux'
import {notesReducer} from "./NotesReducer";
import {globalReducer} from './GlobalReducer'

const reducers = combineReducers({
    notes: notesReducer,
    globals: globalReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>