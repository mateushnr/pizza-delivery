import { NavLink } from 'react-router-dom'
import pizzaHome from '../../../public/images/pizzaHome.svg'
import { Pizza, Wallet, Timer } from 'phosphor-react'
import {
  HomeContainer,
  Aside,
  MenuButton,
  Content,
  Info,
  DetalheBackground,
  Separator,
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Aside>
        <img
          src={pizzaHome}
          alt="Pedaço de pizza sendo retirado de uma Pizza"
        />
        <NavLink to={'/menu'}>
          <MenuButton>Conferir Cardápio</MenuButton>
        </NavLink>
      </Aside>

      <Content>
        <h1>
          <strong>Pizzas</strong> deliciosas e preços imbatíveis
        </h1>
        <p>Encontre a pizza que deseja e peça a qualquer hora ou lugar</p>
        <Separator />
        <Info>
          <span>
            <Pizza size={32} color="#f94e4e" />
            <p>Diversos sabores vegetarianos e tradicionais</p>
          </span>
          <span>
            <Timer size={32} color="#f2a436" />
            <p>Entregas realizadas em até 40 minutos</p>
          </span>
          <span>
            <Wallet size={32} color="#7bf94e" />
            <p>Faça o pedido e pague na entrega</p>
          </span>
        </Info>
      </Content>
      <DetalheBackground />
    </HomeContainer>
  )
}
