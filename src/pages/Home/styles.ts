import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: 450px 1fr;
  gap: 3rem;
`

export const Aside = styled.aside`
  display: flex;
  max-width: 450px;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  a {
    text-decoration: none;
  }
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  border-radius: 5px;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  font-weight: medium;
  position: relative;

  color: ${(props) => props.theme.g11};
  background: ${(props) => props.theme['green-400']};

  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 0px 10px 1px ${(props) => props.theme['green-400']};
  }
`

export const Content = styled.article`
  background: ${(props) => props.theme.g11};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    color: ${(props) => props.theme.g1};
    font-family: Poppins, Roboto, sans-serif;
    font-weight: medium;
    font-size: 3rem;

    strong {
      color: ${(props) => props.theme.p2};
    }
  }

  p {
    font-size: 1.6rem;
    color: ${(props) => props.theme.g4};
  }
`

export const Separator = styled.span`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.g9};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  span {
    display: flex;
    gap: 1rem;
    p {
      color: ${(props) => props.theme.g2};
    }
  }
`

export const DetalheBackground = styled.div`
  background: ${(props) => props.theme.g9};
  height: 14rem;
  width: 100%;
  position: absolute;
  left: 0;
  top: 360px;
  z-index: -2;
`
