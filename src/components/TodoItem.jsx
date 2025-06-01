import React, { useState } from 'react'
import styled from 'styled-components'

const Item = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 8px 0;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.span`
  flex: 1;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? '#999' : '#333')};
  margin-right: 10px;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
`

const Button = styled.button`
  background-color: ${(props) => props.bg || '#888'};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
`

const Input = styled.input`
  flex: 1;
  padding: 6px;
  font-size: 16px;
`

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleEdit = () => {
    if (newText.trim() === '') return
    onEdit(todo.id, newText)
    setIsEditing(false)
  }

  return (
    <Item>
      {isEditing ? (
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleEdit()
          }}
        />
      ) : (
        <Text completed={todo.completed} onClick={() => onToggle(todo.id)}>
          {todo.text}
        </Text>
      )}

      <ButtonGroup>
        {isEditing ? (
          <Button onClick={handleEdit} bg="#198754">Salvar</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} bg="#0d6efd">Editar</Button>
        )}
        <Button onClick={() => onDelete(todo.id)} bg="#dc3545">Excluir</Button>
      </ButtonGroup>
    </Item>
  )
}

export default TodoItem
