import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`

export const InputGroup = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    padding-top: 8px;
    width: 400px;
  }

  input,
  select {
    background-color: ${cores.branca};
    border: 1px solid ${cores.preta};
    height: 32px;
    padding: 0 8px;
    width: 400px;

`
export const ButtonGroup = styled.div`
  margin-top: 32px;
`
export const TextGroup = styled.div`
  width: 400px;
  font-size: 32px;
  font-weight: bold;
`
