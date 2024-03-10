import { Minus, Plus } from 'phosphor-react'
import { AmountInputContainer } from './styles'

interface AmountProps {
  amount: number
  incrementAmount: () => void
  decrementAmount: () => void
}

export const AmountInput = ({
  amount,
  incrementAmount,
  decrementAmount,
}: AmountProps) => {
  return (
    <AmountInputContainer>
      <button onClick={decrementAmount}>
        <Minus />
      </button>
      <span>{amount}</span>
      <button onClick={incrementAmount}>
        <Plus />
      </button>
    </AmountInputContainer>
  )
}
