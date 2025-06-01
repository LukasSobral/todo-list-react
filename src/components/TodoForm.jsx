import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`
const Input = styled.input`
  padding: 10px;
  width: 300px;
  border: 2px solid #7b2cbf;
  border-radius: 8px 0 0 8px;
  font-size: 16px;
  outline: none;
`
const Button = styled.button`
  background-color: #7b2cbf;
  color: #fff;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  &:hover {
    background-color: #5a189a;
  }
`

function TodoForm({ onAdd }) {
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === "") return
    onAdd(text)
    setText("")
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite uma tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  )
}

export default TodoForm
