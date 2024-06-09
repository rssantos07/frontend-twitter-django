import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 1000px) {
    alignt-text: center;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  align-itens: flex-start;

  h1 {
    margin-top: -60px;
    margin-bottom: 100px;
    font-size: 64px;
    font-weight: 700;
    white-space: nowrap;
    @media (max-width: 460px) {
      white-space: wrap;
      padding: 18px;
      font-size: 48px;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    align-items: center;
  }
`
export const Row = styled.div`
  background-color: inherit;
  border: 1px solid ${cores.cinza_escuro};
  border-radius: 25px;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  @media (max-width: 460px) {
    width: 95%;
  }
  form {
    display: flex;
    flex-direction: column;

  }
  button {
    background: ${cores.azul};
    border: none;
    color: ${cores.branca};
    font-weight: bold;
    padding: 16px;
    border-radius: 25px;
    margin-top: 24px;
    margin-bottom: 20px;
    &:hover {
      background: ${cores.azul_hover};
    }
`
export const InputGroup = styled.div`
  display: flex;
  justify-content: center;

  label {

    white-space: nowrap;
    padding: 8px;
  }
  input {
    background: ${cores.branca};
    color: black;
    width: 250px;
    margin: 5px;
  }

  }
`
