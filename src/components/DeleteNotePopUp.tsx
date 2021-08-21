import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {bindActionCreators} from "redux";
import {actionCreators} from "../store";
import {useDispatch} from "react-redux";


interface PropsI {
    isDeletePopupOpen: boolean,
    changePopUpOpen: () => void,
}

const DeleteNotePopUp: FC<PropsI> = ({isDeletePopupOpen, changePopUpOpen}) => {
    const dispatch = useDispatch()
    const {deleteActiveNote} = bindActionCreators(actionCreators, dispatch)

    return (
        <Dialog open={isDeletePopupOpen} onClose={changePopUpOpen}>
            <DialogContent id={'delete-note?'}>
                <DialogContentText>
                    Are you sure you want to delete your note?
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={()=>{
                        changePopUpOpen()
                    }}
                >No</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={()=>{
                        deleteActiveNote()
                        changePopUpOpen()
                    }}
                >Yes</Button>
            </DialogActions>

        </Dialog>
    );
};

export default DeleteNotePopUp;