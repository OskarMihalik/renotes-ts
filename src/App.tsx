import React from 'react';
import {Box} from "@material-ui/core";

import Treeview from "./components/Treeview";
import Sidebar from "./components/Sidebar";
import NoteInfo from "./components/NoteInfo";
import Note from "./components/Note";

// to create draggable notes https://javascript.plainenglish.io/how-to-make-a-simple-custom-drag-to-move-component-in-react-f67d5c99f925

function App() {

    return (
        <Box sx={{
            height: "100vh",
            display: 'grid',
            gridTemplateColumns: '0.02fr 30% 1fr',
            gridTemplateRows: '.05fr 1fr 1fr',
            gridTemplateAreas: '"sidebar treeview noteInfo" "sidebar treeview note" "sidebar treeview note"'
        }}>
            <Box sx={{gridArea: 'sidebar'}} borderRight={1}><Sidebar/></Box>
            <Box sx={{gridArea: 'treeview'}} borderRight={1} p={'10px 10px 10px 0px'}><Treeview/></Box>
            <Box sx={{gridArea: 'noteInfo'}}><NoteInfo/></Box>
            <Box sx={{gridArea: 'note'}}><Note/></Box>
        </Box>
    );
}

export default App;
