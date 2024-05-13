import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  }
`
export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${cores.azul};
  font-size: 15px;
  font-weight: bold;
  color: ${cores.azul};
  padding: 10px;
  align-items:center;
  }
`
