import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    & > h1 {
      font-family: Poppins, Roboto, sans-serif;
      font-size: 2rem;
      color: ${(props) => props.theme.s2};
    }

    & > p {
      font-family: Poppins, Roboto, sans-serif;
      font-size: 1.2rem;
      color: ${(props) => props.theme.g3};
    }
  }
`

export const OrderInfo = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  border-radius: 5px 30px;

  background: ${(props) => props.theme.g9};

  & > div {
    display: flex;
    align-items: center;
    gap: 1.8rem;
  }
`

const InfoIcon = styled.span`
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
`

export const IconAddress = styled(InfoIcon)`
  background: ${(props) => props.theme.s2};
`

export const IconTime = styled(InfoIcon)`
  background: ${(props) => props.theme.s3};
`

export const IconPrice = styled(InfoIcon)`
  background: ${(props) => props.theme['green-400']};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & > strong {
    font-size: 1.3rem;
    font-weight: 300;
    color: ${(props) => props.theme.g3};
  }

  & > p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.g1};
  }
`
