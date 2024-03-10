import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  margin-top: -2rem;
  gap: 3rem;
`

export const FormContainer = styled.form`
  width: 780px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > h1 {
    font-family: Poppins, Roboto, sans-serif;
    font-weight: normal;
    color: ${(props) => props.theme.white};
    font-size: 2rem;
  }
`

export const AddressData = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  border-radius: 5px;
  background: ${(props) => props.theme.g9};
  padding: 2rem;
`
export const Header = styled.div`
  display: flex;
  gap: 0.8rem;

  & > svg {
    color: ${(props) => props.theme.s2};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    & > h1 {
      font-size: 1.5rem;
      color: ${(props) => props.theme.g1};
      font-weight: normal;
    }

    & > strong {
      font-size: 1.2rem;
      color: ${(props) => props.theme.g3};
      font-weight: 300;
    }
  }
`
export const AddressInputs = styled.div`
  display: grid;
  grid-template-areas: 'cep . .' 'street street street' 'number complement complement' 'neighborhood city state';
  grid-template-columns: 200px 1fr 100px;
  gap: 0.8rem;
`

export const PaymentData = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  border-radius: 5px;
  background: ${(props) => props.theme.g9};
  padding: 2rem;
`
export const OptionsContainer = styled.aside`
  padding: 0.6rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`
export const PaymentErrorMessage = styled.div`
  margin-top: -20px;
  color: ${(props) => props.theme.p2};
`

export const CartInfo = styled.aside`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > h1 {
    font-family: Poppins, Roboto, sans-serif;
    font-weight: normal;
    color: ${(props) => props.theme.white};
    font-size: 2rem;
  }

  & > section {
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
    border-radius: 5px 15px;
    background: ${(props) => props.theme.g9};
    padding: 2rem;
  }
`
export const CartList = styled.div`
  display: flex;
  flex-direction: column;
`

export const PizzaFragment = styled.div`
  display: flex;
  min-width: 450px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.g8};

  & > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  & > div > img {
    max-width: 100px;
  }

  & > span {
    color: ${(props) => props.theme.g2};
    font-size: 1.2rem;
    font-weight: normal;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > strong {
    color: ${(props) => props.theme.g2};
    font-size: 1.2rem;
    font-weight: 400;
  }

  & > div {
    display: flex;
    gap: 1rem;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  padding: 0.7rem;
  background: ${(props) => props.theme.g4};
  color: ${(props) => props.theme.g11};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.125rem;
  transition: background 0.3s;

  & > svg {
    color: ${(props) => props.theme.p4};
  }

  &:hover {
    background: ${(props) => props.theme.p2};
  }

  &:hover > svg {
    color: ${(props) => props.theme.g11};
  }
`

export const FinishOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    color: ${(props) => props.theme.g11};
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.8rem;
    border-radius: 10px;
    border: none;
    background: ${(props) => props.theme.s2};
    cursor: pointer;
    text-transform: uppercase;
    transition:
      color 0.4s,
      background 0.4s;
  }

  button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  button:not(:disabled):hover {
    background: ${(props) => props.theme.s3};
    color: ${(props) => props.theme.g1};
  }
`
export const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`
export const TotalItems = styled.div`
  color: ${(props) => props.theme.g4};
  font-size: 1.1rem;
`
export const DeliveryPrice = styled.div`
  color: ${(props) => props.theme.g4};
  font-size: 1.07rem;
`
export const TotalPrice = styled.div`
  color: ${(props) => props.theme.g1};
  font-size: 1.4rem;
`
