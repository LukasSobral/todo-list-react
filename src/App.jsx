import React, { useState, useEffect, useRef } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import FilterButtons from './components/FilterButtons'
import { GlobalStyle } from './styles/GlobalStyles'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`

const Title = styled.h1`
  color: #3c096c;
  margin-bottom: 1.5rem;
`

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all') 
  const isFirstRender = useRef(true)


  useEffect(() => {
    const savedTodos = localStorage.getItem("my-todos")
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    localStorage.setItem("my-todos", JSON.stringify(todos))
  }, [todos])

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  const handleToggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updated)
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEditTodo = (id, newText) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    )
    setTodos(updated)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>📝 Minha Lista de Tarefas</Title>
        <TodoForm onAdd={handleAddTodo} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      </Container>
    </>
  )
}

export default App
