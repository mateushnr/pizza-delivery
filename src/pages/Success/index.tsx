import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  IconAddress,
  IconPrice,
  IconTime,
  OrderInfo,
  SuccessContainer,
  Info,
} from './styles'
import { useCart } from '../../hooks/useCart'

export const Success = () => {
  const { orders } = useCart()

  const lastOrder = orders[orders.length - 1]

  return (
    <SuccessContainer>
      <div>
        <h1>Seu pedido foi confirmado!!</h1>
        <p>Logo a sua entrega estará em suas mãos</p>
      </div>

      <OrderInfo>
        <div>
          <IconAddress>
            <MapPin size={32} />
          </IconAddress>
          <Info>
            <strong>
              {lastOrder
                ? `Entrega em ${lastOrder.data.street}, ${lastOrder.data.number}`
                : null}
            </strong>
            <p>
              {lastOrder
                ? `Entrega em ${lastOrder.data.neighborhood} - ${lastOrder.data.city}, ${lastOrder.data.state}`
                : null}
            </p>
          </Info>
        </div>
        <div>
          <IconTime>
            <Timer size={32} />
          </IconTime>
          <Info>
            <strong>Previsão de entrega</strong>
            <p>30min - 40min</p>
          </Info>
        </div>
        <div>
          <IconPrice>
            <CurrencyDollar size={32} />
          </IconPrice>
          <Info>
            <strong>Valor Total</strong>
            <p>
              {lastOrder
                ? new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(lastOrder.total)
                : null}
            </p>
          </Info>
        </div>
      </OrderInfo>
    </SuccessContainer>
  )
}
