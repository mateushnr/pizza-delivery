import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 250px;
  border-radius: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;

  gap: 1rem;
  background: ${(props) => props.theme.g1};

  & > div {
    display: flex;
    gap: 1rem;
    position: relative;
    width: 100%;
    justify-content: flex-end;
  }

  & > div > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.h2`
  margin-top: 0.8rem;
  font-size: 1.2rem;
  font-family: Poppins, Roboto, sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.g11};
`

export const PizzaImg = styled.img`
  width: 175px;
  position: absolute;
  left: -60px;
  top: -5px;
`

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 10px;
  height: 60px;
  align-items: flex-end;
`
const TAG_COLORS = {
  green: 'green-200',
  red: 'p1',
  yellow: 's1',
} as const

interface TagProps {
  tagcolor: keyof typeof TAG_COLORS
}

export const Tag = styled.span<TagProps>`
  background: ${(props) => props.theme[TAG_COLORS[props.tagcolor]]};
  color: ${(props) => props.theme.g10};
  font-size: 1rem;
  width: fit-content;
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
`

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  color: ${(props) => props.theme.s3};
  font-family: Poppins, Roboto, sans-serif;
  font-size: 1.2rem;
  font-weight: medium;
  margin-bottom: 20px;

  strong {
    color: ${(props) => props.theme.g9};
    font-size: 1.6rem;
    font-family: inherit;
  }
`

export const Controller = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
  padding: 0 12px 0 0;
`
export const AddCartButton = styled.button`
  border: none;
  background: ${(props) => props.theme.s2};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.25s;

  &:disabled {
    background: ${(props) => props.theme['green-200']};
    border: 2px solid ${(props) => props.theme['green-400']};
    cursor: not-allowed;
  }

  &:disabled svg {
    color: ${(props) => props.theme.g7};
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.s1};
    border: 2px solid ${(props) => props.theme.s2};
  }
`

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.g8};
  text-align: center;
  padding: 5px;
  margin-bottom: 10px;
`
