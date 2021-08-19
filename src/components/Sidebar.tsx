import React, {ClassAttributes, FC, RefObject, useRef} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from '../store'
import {DefaultNoteStateI} from '../store/reducers/NotesReducer'
import {v4 as uuidv4} from 'uuid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            textTransform: 'none',
        },
        element: {
            transform: "rotate(-90deg)",
            margin: '12px 0px',
            padding: '12px 0px',
            maxWidth: '40px', maxHeight: '30px', minWidth: '40px', minHeight: '30px',
            fontSize: 10,
            color: 'theme.pallet'
        }
    }))

const Sidebar: FC = () => {
    const dispatch = useDispatch()
    const {addNote, deleteActiveNote} = bindActionCreators(actionCreators, dispatch)
    const classes = useStyles();
    const fileInputRef=useRef<HTMLInputElement>(null);

    return (
        <div className={classes.root}>
            <Button className={classes.element}>Notes</Button>
            <Button className={classes.element}>Export</Button>
            <Button className={classes.element}>
                Import
            </Button>
            <input ref={fileInputRef} type={'file'} accept={'.txt'} hidden style={{display:'none'}}/>
            <Button
                className={classes.element}
                onClick={() =>addNote({
                    id: uuidv4(),
                    title: 'new note',
                    creationDate: Date().toLocaleString(),
                    content: '',
                })}
            >
                <AddIcon/>
            </Button>
            <Button
                className={classes.element}
                onClick={()=> deleteActiveNote()}
            >
                <DeleteIcon style={{transform: "rotate(90deg)"}}/>
            </Button>
            <Button
                className={classes.element}
            >
            </Button>
        </div>
    );
};

export default Sidebar;