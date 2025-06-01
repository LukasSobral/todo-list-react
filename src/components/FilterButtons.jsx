import React from 'react'
import styled from 'styled-components'

const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 8px;
`

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => (props.$active ? '#3f37c9' : '#adb5bd')};
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #3f37c9;
  }
`

function FilterButtons({ filter, setFilter }) {
  return (
    <ButtonGroup>
      <Button onClick={() => setFilter('all')} active={filter === 'all'}>
        Todas
      </Button>
      <Button onClick={() => setFilter('active')} active={filter === 'active'}>
        Ativas
      </Button>
      <Button onClick={() => setFilter('completed')} active={filter === 'completed'}>
        Concluídas
      </Button>
    </ButtonGroup>
  )
}

export default FilterButtons
