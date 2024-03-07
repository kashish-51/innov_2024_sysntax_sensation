import React, { useState, useEffect,useContext } from 'react';
// import AiImageGenerator from './AiImageGenerator';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import NoteContext from '../context/notes/NoteContext';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Showtask = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return ( 
        <div className="w-screen h-screen bg-yellow " >
        <div className='flex flex-wrap ' >
            
                <Card key={note._id} variant="outlined"  className='ml-2 mt-12 mr-5 '>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h5" component="div">
                                {note.title} 
                            </Typography>
                        </Stack>
                        <Typography color="text.secondary" variant="body2">
                            {note.description}
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                    <Typography color="text.secondary" variant="body2">
                            {note.date}
                        </Typography>
                        <Typography gutterBottom variant="body2">
                            Select type
                        </Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                            {/* Checkbox */}
                            <Checkbox {...label} onClick={()=>{deleteNote(note._id)}} />

                            {/* Edit icon */}
                            <EditIcon onClick={()=>{updateNote(note)}}/>
                        </Stack>
                    </Box>
                </Card>
        
        </div>
        </div>
    );
};

export default Showtask;








