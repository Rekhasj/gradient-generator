import styled from 'styled-components'

export const CustomList = styled.li``

export const SelectButton = styled.button`
  color: #1e293b;
  background-color: #ededed;
  border: none;
  border-radius: 5px;
  margin: 5px;
  padding: 8px 20px;
  cursor: pointer;
  outline: none;
  opacity: ${props => (props.active ? 0.5 : 1)};
`
