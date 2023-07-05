import React, { useState } from 'react';
import data from '../src/Components/data.json';
import { TodoForm } from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { Card, CardContent, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';


function App() {

  const [todos, setTodos] = useState(data);

  const onComplete = (id) => {

    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? { ...todo, completed: !todo.completed } : { ...todo }
    })
    )
    const result = todos.find((todo) => todo.id === id)
    console.log(result)
  }

  const onDeleteItem = (id) => {

    setTodos([...todos].filter(todo => todo.id !== id))
  }

  const addTodo = (newTodo) => {
    let newItem = { id: +new Date(), task: newTodo, completed: false };
    setTodos([...todos, newItem]);
  }


  return (
    <>
      <Box as="section" height="100vh" bgcolor="#030303">
        <Container sx={{ paddingTop: 4 }} maxWidth="sm">
          <Card sx={{ borderRadius: 2, bgcolor: "#f1f1f2" }}>
            <CardContent>
              <Typography display="flex" sx={{ fontSize: 30, justifyContent: 'center', marginBottom: 4 }} color="#676768" gutterBottom>
                Lista de Tareas
              </Typography>
              <TodoForm addTodo={addTodo} />
              <Typography className='empty' marginTop="30px" color="#676768">
                No tienes tareas creadas.
              </Typography>
              <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem} />
            </CardContent>
          </Card>
        </Container>
      </Box>

    </>
  );
}

export default App;
