import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 24px;
  height: auto;

  position: sticky;
  top: 0;
  left: 0;

  max-height: 100vh;
  overflow-y: auto;
  @media (max-width: 550px) {
    display: none;
  }

  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  ::webkit-scrollbar {
    display: none;
  }
`

export const Sign = styled.div`
  border-radius: 14px;
  width: 350px;
  padding: 13px 16px;
  background: ${cores.cinza_escuro};
  margin-bottom: 15px;
  h3 {
    background: ${cores.cinza_escuro};
    margin-bottom: 12px;
  }
  p {
    background-color: ${cores.cinza_escuro};
  }
`

export const Line = styled.div`
  border-bottom: 1px solid ${cores.branca};
`
export const Moment = styled.div`
  border-radius: 14px;
  width: 350px;
  max-width: 100%;
  background: ${cores.cinza_escuro};
  padding: 10px 0px;
`
export const Title = styled.div`
  line-height: 24px;
  background-color: ${cores.cinza_escuro};
  font-size: 19px;
  font-weight: bold;
  color: ${cores.branca};
  padding: 5px 0px 10px 15px;
`
export const Subject = styled.div`
  margin: 15px 16px;
  h3 {
    font-weight: 100;
    font-size: 14px;
    background-color: ${cores.cinza_escuro};
  }
  p {
    font-size: 18px;
    font-weight: 700;
    background-color: ${cores.cinza_escuro};
  }
`

export const Button = styled(ButtonContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 36px;
  margin-top: 20px;
`
