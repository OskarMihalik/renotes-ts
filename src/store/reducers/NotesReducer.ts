import {Action} from "../actions";
import { ActionNoteType} from "../action-types";

interface DefaultNotesStateI {
    activeNoteIndex: number,
    notes: DefaultNoteStateI[]
}

export interface DefaultNoteStateI {
    id: string,
    title: string,
    creationDate: string,
    content: string,
}

const defaultState: DefaultNotesStateI =
    {
        activeNoteIndex: 0,
        notes: [{
            id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            title: "first note",
            creationDate: 'Tue Jun 08 2021 15:15:42 GMT+0200 (Central European Summer Time)',
            content: '# Intro\n' +
                'Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like `cmd-b` or `ctrl-b`.\n' +
                '\n' +
                '## Lists\n' +
                'Unordered lists can be started using the toolbar or by typing `* `, `- `, or `+ `. Ordered lists can be started by typing `1. `.\n' +
                '\n' +
                '#### Unordered\n' +
                '* Lists are a piece of cake\n' +
                '* They even auto continue as you type\n' +
                '* A double enter will end them\n' +
                '* Tabs and shift-tabs work too\n' +
                '\n' +
                '#### Ordered\n' +
                '1. Numbered lists...\n' +
                '2. ...work too!\n' +
                '\n' +
                '## What about images?\n' +
                '![Yes](https://i.imgur.com/sZlktY7.png)'
            },
        ]
    }


export const notesReducer = (state = defaultState, action: Action): DefaultNotesStateI => {
    switch (action.type) {
        case ActionNoteType.ADD_NOTE:
            return {
                activeNoteIndex: state.activeNoteIndex+1,
                notes: [...state.notes, action.payload]
            }
        case ActionNoteType.DELETE_ACTIVE_NOTE:
            if (state.notes.length > 0) {
                let newNotes = [...state.notes]
                newNotes.splice(state.activeNoteIndex, 1)
                return {
                    activeNoteIndex: state.notes.length > 1 ? state.activeNoteIndex - 1 : -1,
                    notes: newNotes
                }
            }
            return state
        case ActionNoteType.CHANGE_ACTIVE_NOTE_INDEX:
            return {
                activeNoteIndex: action.payload,
                notes: [...state.notes]
            }
        default:
            return state
    }
}
