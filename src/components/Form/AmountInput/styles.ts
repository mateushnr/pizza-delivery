import styled from 'styled-components'

export const AmountInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  background: ${(props) => props.theme.g3};
  padding: 0 10px;
  border-radius: 10px;

  button {
    border: none;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 2px;

    & > :hover {
      color: ${(props) => props.theme.g8};
    }
  }

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme.g9};
  }
`
