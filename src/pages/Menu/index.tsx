import { Card } from '../../components/Card'
import { ListaPizza, MenuContainer } from './styles'

import { pizzas } from '../../data.json'
import { useCart } from '../../hooks/useCart'

export const Menu = () => {
  const { addItem } = useCart()
  function addItemCart(id: number, quantity: number) {
    addItem({ id, quantity })
  }

  return (
    <MenuContainer>
      <h1>Cardápio</h1>

      <ListaPizza>
        {pizzas.map((pizza) => {
          return <Card key={pizza.id} addItemCart={addItemCart} pizza={pizza} />
        })}
      </ListaPizza>
    </MenuContainer>
  )
}
