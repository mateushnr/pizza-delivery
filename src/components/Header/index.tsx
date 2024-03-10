import logoPizzaDelivery from '../../../public/logoPizzaDelivery.svg'
import { AddressContainer, CartButton, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { ShoppingCartSimple, MapPin } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'

export const Header = () => {
  const { cart } = useCart()

  const storedLastAddressJSON = localStorage.getItem(
    '@pizza-delivery:last-address-1.0.0',
  )

  const storedLastAddress = storedLastAddressJSON
    ? JSON.parse(storedLastAddressJSON)
    : null

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logoPizzaDelivery} alt="Pizza Delivery" />
      </NavLink>

      <nav>
        {storedLastAddress ? (
          <AddressContainer>
            <MapPin size={24} />
            {`${storedLastAddress.city}, ${storedLastAddress.state}`}
          </AddressContainer>
        ) : null}

        <NavLink to={'cart'}>
          <CartButton
            disabled={!cart.length}
            title={cart.length ? '' : 'Adicione algum item ao carrinho'}
          >
            Carrinho
            <ShoppingCartSimple size={28} />
            <span>{cart.length}</span>
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
