import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 3rem 0;
  background: ${(props) => props.theme.g11};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  p {
    color: ${(props) => props.theme.g5};
    display: flex;
    align-items: center;
    gap: 0.3rem;

    a {
      color: ${(props) => props.theme['purple-100']};
      font-size: 1.05rem;
      text-decoration: none;
    }
  }
`
