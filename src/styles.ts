import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#d9d9d9',
  preta: '#000',
  azul: '#33A1F2',
  cinza: '#7A7A7A',
  curtida: '#E8265E',
  azul_hover: '#2c8eD6',
  cinza_hover: '#011010',
  linha: '#2f3336',
  cinza_escuro: '#15181c'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing:	border-box;
  font-family: -apple-system, system-ui,BlinkMacSystemFont, Roboto, sans-serif;
  list-style: none;
  background-color: ${cores.preta};
  color: ${cores.branca};
}
`
export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`
