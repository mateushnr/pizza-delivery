import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'
import { ContainerInput, Field, Invalid } from './styles'
import { FieldError } from 'react-hook-form'
import axios from 'axios'
import { CepAddressData } from '../../../pages/Cart'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  styledProps: HTMLAttributes<HTMLDivElement>
  optional?: boolean
  error?: FieldError
  setErrorMessage?: (message: string) => void
  setCepAddressData?: (data: CepAddressData) => void
}

export const TextInput = forwardRef(function TextInput(
  {
    type,
    styledProps,
    optional,
    error,
    setErrorMessage,
    setCepAddressData,
    ...props
  }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus() {
    setIsFocused(true)
  }

  async function searchCep(cep: string) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  async function handleBlur(e: FocusEvent<HTMLInputElement>) {
    setIsFocused(false)

    if (e.target.name === 'cep') {
      const formattedCep = e.target.value.replace('-', '')

      if (formattedCep.length === 8) {
        const cepData = await searchCep(formattedCep)
        if (cepData && 'erro' in cepData.data && setErrorMessage) {
          setErrorMessage('Cep não encontrado')
        } else {
          cepData &&
            setCepAddressData &&
            setCepAddressData({
              street: cepData.data.logradouro,
              neighborhood: cepData.data.bairro,
              city: cepData.data.localidade,
              state: cepData.data.uf,
            })
        }
      }
    }
  }

  return (
    <ContainerInput {...styledProps}>
      <Field
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-state={isFocused ? 'focused' : 'blurred'}
      >
        <input type={type} ref={ref} {...props} />
        {optional ? <span>Opcional</span> : null}
      </Field>
      {error?.message ? <Invalid>{error?.message}</Invalid> : null}
    </ContainerInput>
  )
})
