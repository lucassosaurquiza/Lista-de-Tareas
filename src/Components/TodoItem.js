import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const TodoItem = ({ todo, onComplete, onDeleteItem }) => {

    const getStyle = () => {

        return {
            textDeoration: todo.completed ? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #fffff',
            backgroundColor: '#CCF7E3',
            padding: '15px',
        }
    }


    return (
        <Box justifyContent='space-between' display='flex' alignItems='center' style={getStyle()}>
            <input type="checkbox" checked={todo.completed}
                onChange={() => onComplete(todo.id)} />
            {todo.task}
            <Button onClick={() => onDeleteItem(todo.id)} sx={{}} variant="contained">X</Button>
        </Box>
    )
}
