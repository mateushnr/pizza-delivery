import {
  CardContainer,
  Controller,
  Description,
  PizzaImg,
  PriceInfo,
  Tags,
  Tag,
  Title,
  AddCartButton,
} from './styles'

import { ShoppingCartSimple } from 'phosphor-react'
import { AmountInput } from '../Form/AmountInput'
import { useEffect, useState } from 'react'

interface CardProps {
  pizza: {
    id: number
    flavour: string
    tags: string[]
    price: number
    image: string
    description: string
  }
  addItemCart: (pizza: number, amount: number) => void
}

export const Card = ({ pizza, addItemCart }: CardProps) => {
  const [amount, setAmount] = useState(1)
  const [isPizzaAdded, setIsPizzaAdded] = useState(false)

  function incrementAmount() {
    setAmount((state) => state + 1)
  }

  function decrementAmount() {
    if (amount > 1) {
      setAmount((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItemCart(pizza.id, amount)
    setIsPizzaAdded(true)
  }

  useEffect(() => {
    let timeout: number
    if (isPizzaAdded) {
      timeout = setTimeout(() => {
        setIsPizzaAdded(false)
      }, 1000)
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isPizzaAdded])

  return (
    <CardContainer>
      <Title>{pizza.flavour}</Title>

      <div>
        <PizzaImg src={pizza.image} alt={'Pizza de ' + pizza.flavour} />
        <div>
          <Tags>
            {pizza.tags.map((tag) => {
              if (tag === 'tradicional') {
                return (
                  <Tag key={tag} tagcolor="yellow">
                    {tag}
                  </Tag>
                )
              } else if (tag === 'carne') {
                return (
                  <Tag key={tag} tagcolor="red">
                    {tag}
                  </Tag>
                )
              } else {
                return (
                  <Tag key={tag} tagcolor="green">
                    {tag}
                  </Tag>
                )
              }
            })}
          </Tags>

          <PriceInfo>
            R${' '}
            <strong>
              {pizza.price.toFixed(2).toString().replace('.', ',')}
            </strong>
          </PriceInfo>

          <Controller>
            <AmountInput
              incrementAmount={incrementAmount}
              decrementAmount={decrementAmount}
              amount={amount}
            />
            <AddCartButton
              disabled={isPizzaAdded}
              title={isPizzaAdded ? 'Pizza já adicionada ao carrinho' : ''}
              onClick={handleAddItem}
            >
              <ShoppingCartSimple size={30} />
            </AddCartButton>
          </Controller>
        </div>
      </div>
      <Description>{pizza.description}</Description>
    </CardContainer>
  )
}
