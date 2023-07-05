
import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react';


export const TodoForm = ({ addTodo }) => {

    const [userInput, setUserInput] = useState('');

    const handleOnChange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.trim() !== '') {
            addTodo(userInput);
            setUserInput('')
        }
    }

    return (
        <Box sx={{ display: 'flex', gap: '8px', }} >
            <form className='form' onSubmit={handleSubmit}>
                <TextField onChange={handleOnChange} value={userInput} name='lucas' fullWidth label="Agregar tarea" id="fullWidth" />

                <Button type='submit' className='add__btn' sx={{ padding: "30px", height: 50, bgcolor: "#FF385C", color: "white" }}>Añadir</Button>
            </form>

        </Box>
    )
}
