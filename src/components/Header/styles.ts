import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 3rem 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  nav {
    display: flex;
    gap: 2rem;

    a {
      text-decoration: none;
    }
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  border-radius: 5px;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  font-weight: medium;
  position: relative;

  color: ${(props) => props.theme.g11};
  background: ${(props) => props.theme.s2};

  cursor: pointer;
  transition: box-shadow 0.2s;

  &:disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    box-shadow: 0px 0px 10px 1px rgb(234, 167, 66, 0.8);
    background: ${(props) => props.theme.s2};
  }

  span {
    display: none;
  }

  &:not(:disabled) span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    left: 142px;
    width: 2rem;
    height: 2rem;
    border-radius: 900px;
    background: ${(props) => props.theme.s1};
    border: 3px solid ${(props) => props.theme.s2};
    color: ${(props) => props.theme.s3};
    font-size: 1.3rem;
    font-weight: bold;
  }
`

export const AddressContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  font-size: 1.3rem;
  font-weight: medium;

  color: ${(props) => props.theme['purple-100']};
  background: none;
`
