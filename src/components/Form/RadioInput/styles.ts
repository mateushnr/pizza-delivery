import styled from 'styled-components'

export const PaymentOption = styled.label`
  background: ${(props) => props.theme.g8};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  min-width: 210px;
  padding: 0.8rem;
  border-radius: 10px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.g2};

  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background: ${(props) => props.theme.g7};
  }

  svg {
    color: ${(props) => props.theme['green-400']};
  }

  &[data-selected='true'] {
    background: #d7e2d5;
    color: ${(props) => props.theme.g11};
    border: 1px solid ${(props) => props.theme['green-400']};

    svg {
      color: ${(props) => props.theme.g10};
    }
  }

  input {
    display: none;
  }
`
