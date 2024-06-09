import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid ${cores.cinza_escuro};
  border-radius: 10px;
  background-color: ${cores.preta};
  p {
    margin-top: 12px;
  }
`

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1rem;
  color: ${cores.branca};
`

export const Input = styled.input`
  margin-bottom: 20px;
  background: ${cores.branca};
  color: ${cores.preta};
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

export const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`
export const Logotype = styled.div`
  border-right: 1px solid ${cores.cinza_escuro};
  margin-right 500px;
  width: 45%;
  @media (max-width: 1000px) {
    display: none;
  }
`
