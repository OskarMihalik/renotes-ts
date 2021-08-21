import React, {ClassAttributes, FC, RefObject, useRef, useState} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from '../store'
import {v4 as uuidv4} from 'uuid';
import DeleteNotePopUp from "./DeleteNotePopUp";

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
    const globals = useSelector((state: State) => state.globals)
    const {addNote, deleteActiveNote, changeNotesOpen, changeIsDarkMode} = bindActionCreators(actionCreators, dispatch)
    const classes = useStyles();
    const fileInputRef=useRef<HTMLInputElement>(null);

    const [isDeletePopUpOpen, setDeletePopUpOpen] = useState(false)

    const changePopUpOpen = () => {
        setDeletePopUpOpen(!isDeletePopUpOpen)
    }

    return (
        <div className={classes.root}>
            <Button
                className={classes.element}
                onClick={()=>{
                    changeNotesOpen()
                }}
            >Notes</Button>
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
                onClick={()=> changePopUpOpen()}
            >
                <DeleteIcon style={{transform: "rotate(90deg)"}}/>
            </Button>
            <DeleteNotePopUp isDeletePopupOpen={isDeletePopUpOpen} changePopUpOpen={changePopUpOpen}/>
            <Button
                className={classes.element}
                onClick={() => {
                    changeIsDarkMode()
                }}
            >
                {globals.isDarkMode ?
                    <Brightness7Icon style={{transform: "rotate(90deg)"}}/> :
                    <Brightness4Icon style={{transform: "rotate(90deg)"}}/>}

            </Button>
        </div>
    );
};

export default Sidebar;