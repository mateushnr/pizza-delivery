import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.g10};
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 15px 1px rgb(0, 0, 0, 0.1);

  border: 2px solid ${(props) => props.theme.g10};

  &[data-state='focused'] {
    border: 2px solid ${(props) => props.theme.g7};
  }

  &[data-state='blurred'] {
    border: 2px solid ${(props) => props.theme.g10};
  }

  input {
    width: 100%;
    border-radius: 5px;
    padding: 0.8rem;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.g3};
    font-size: 1rem;
    border: 2px solid transparent;

    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: #ffffff;
      transition: background-color 5000s ease-in-out 0s;
      box-shadow: inset 0 0 20px 20px #23232329;
    }
  }

  input::placeholder {
    color: ${(props) => props.theme.g6};
  }

  span {
    padding: 0 1.4rem 0 0.8rem;
    font-weight: light;
    color: ${(props) => props.theme.g5};
    border-left: 2px solid ${(props) => props.theme.g9};
  }
`

export const Invalid = styled.p`
  color: ${(props) => props.theme.p2};
`
