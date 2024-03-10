import styled from 'styled-components'

export const MenuContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  h1 {
    font-size: 3rem;
    font-weight: normal;
    font-family: Poppins, Roboto, sans-serif;
  }
`

export const ListaPizza = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`
