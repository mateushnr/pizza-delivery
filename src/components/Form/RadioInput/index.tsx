import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { PaymentOption } from './styles'

type RadioInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const RadioInput = forwardRef(function RadioInput(
  { children, isSelected, ...props }: RadioInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <PaymentOption data-selected={isSelected}>
      <input type="radio" ref={ref} {...props} />
      {children}
    </PaymentOption>
  )
})
