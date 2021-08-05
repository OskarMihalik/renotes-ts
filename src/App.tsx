import React from 'react';
import {Box} from "@material-ui/core";

import Treeview from "./components/Treeview";
import Sidebar from "./components/Sidebar";
import NoteInfo from "./components/NoteInfo";
import Note from "./components/Note";

function App() {

    return (
        <Box sx={{
            height: "100vh",
            display: 'grid',
            gridTemplateColumns: '0.02fr 30% 1fr',
            gridTemplateRows: '.05fr 1fr 1fr',
            gridTemplateAreas: '"sidebar treeview noteInfo" "sidebar treeview note" "sidebar treeview note"'
        }}>
            <Box sx={{gridArea: 'sidebar'}}><Sidebar/></Box>
            <Box sx={{gridArea: 'treeview'}}><Treeview/></Box>
            <Box sx={{gridArea: 'noteInfo'}}><NoteInfo/></Box>
            <Box sx={{gridArea: 'note'}}><Note/></Box>
        </Box>
    );
}

export default App;
