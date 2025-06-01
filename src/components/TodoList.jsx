import React from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
`

function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </List>
  )
}

export default TodoList
