import React, {useMemo} from 'react';
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Treeview from "./components/Treeview";
import Sidebar from "./components/Sidebar";
import NoteInfo from "./components/NoteInfo";
import Note from "./components/Note";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {State} from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";
// to create draggable notes https://javascript.plainenglish.io/how-to-make-a-simple-custom-drag-to-move-component-in-react-f67d5c99f925

const useStyles = makeStyles<Theme, StylePropsI>((theme: Theme) =>
    createStyles({
        appGrid: {
            height: "100vh",
            display: 'grid',
            gridTemplateColumns: (styleProps)=> styleProps.notesOpen ? '0.02fr 30% 1fr' : '0.02fr 0 1fr',
            gridTemplateRows: '.05fr 1fr 1fr',
            gridTemplateAreas: '"sidebar treeview noteInfo" "sidebar treeview note" "sidebar treeview note"',

        },
        sidebar: {
            gridArea: 'sidebar',
            borderWidth: '0px 1px 0px 0px',
            borderStyle: 'solid',
            borderColor: theme.palette.text.primary
        },
        treeview: {
            gridArea: 'treeview',
            borderWidth: '0px 1px 0px 0px',
            borderStyle: 'solid',
            borderColor: theme.palette.text.primary,
            padding: '10px 10px 10px 0px',
            visibility: (styleProps)=> styleProps.notesOpen ? 'visible' : 'hidden'
        },
        noteInfo: {
            gridArea: 'noteInfo'
        },
        note: {
            gridArea: 'note'
        }
    }))

interface StylePropsI{
    notesOpen: boolean
}

function App() {
    const globals = useSelector((state: State) => state.globals)

    const custom_theme = useMemo(
        () =>
            createTheme({
                palette: {
                    type: globals.isDarkMode ? 'dark' : 'light',
                },
            }),
        [globals.isDarkMode],
    );

    const stylePropsI: StylePropsI = {
        notesOpen: globals.areNotesOpen
    }
    const styles = useStyles(stylePropsI)
    return (
        <MuiThemeProvider theme={custom_theme}>
            <CssBaseline>
                <div className={styles.appGrid}>
                    <div className={styles.sidebar}><Sidebar/></div>
                    <div className={styles.treeview}><Treeview/></div>
                    <div className={styles.noteInfo}><NoteInfo/></div>
                    <div className={styles.note}><Note/></div>
                </div>
            </CssBaseline>
        </MuiThemeProvider>
    );
}

export default App;
