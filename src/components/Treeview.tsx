import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from 'redux'
import {actionCreators, State} from '../store'
import TreeItem from '@material-ui/lab/TreeItem';
import {TreeView} from "@material-ui/lab";

const Treeview = () => {
    const dispatch = useDispatch()
    const notes = useSelector((state: State) => state.notes)
    console.log(notes.activeNoteIndex.toString())
    return (
        <div>
            <TreeView
                multiSelect={false}
                selected={notes.activeNoteIndex.toString()}
            >
                {notes.notes.map((note, index) => {
                    return (
                        <TreeItem
                            nodeId={index.toString()}
                            label={note.title ? note.title : '...'}
                            color={'secondary'}
                        />
                    )
                })}
            </TreeView>

        </div>
    );
};

export default Treeview;