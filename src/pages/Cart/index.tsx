import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { pizzas } from '../../data.json'

import {
  CurrencyDollar,
  MapPin,
  CreditCard,
  Trash,
  Bank,
  Money,
} from 'phosphor-react'
import {
  AddressData,
  AddressInputs,
  CartContainer,
  CartInfo,
  CartList,
  FinishOrder,
  FormContainer,
  PizzaFragment,
  Header,
  PaymentData,
  TotalInfo,
  OptionsContainer,
  PaymentErrorMessage,
  InputsContainer,
  RemoveButton,
  TotalItems,
  TotalPrice,
  DeliveryPrice,
} from './styles'
import { TextInput } from '../../components/Form/TextInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ChangeEvent, useEffect } from 'react'
import { RadioInput } from '../../components/Form/RadioInput'
import { useCart } from '../../hooks/useCart'
import { AmountInput } from '../../components/Form/AmountInput'

const OrderSchema = z.object({
  cep: z
    .string()
    .min(1, 'Informe o Cep')
    .refine((value) => {
      const regex = /^([0-9]{5})([-]{1}[0-9]{3})?$/
      return regex.test(value)
    }, 'Cep inválido'),
  street: z
    .string()
    .min(1, 'Informe uma rua válida')
    .min(4, 'Informe uma rua válida'),
  number: z.string().min(1, 'Informe o número'),
  complement: z.string(),
  neighborhood: z
    .string()
    .min(1, 'Informe um bairro válido')
    .min(4, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z
    .string()
    .min(1, 'Informe a UF')
    .transform((value) => {
      return value.toUpperCase()
    }),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export interface CepAddressData {
  street: string
  neighborhood: string
  city: string
  state: string
}

export type DataProps = z.infer<typeof OrderSchema>

export const Cart = () => {
  const { cart, incrementItem, decrementItem, removeItem, createOrder } =
    useCart()

  const pizzaInCart = cart.map((item) => {
    const infoPizza = pizzas.find((pizza) => pizza.id === item.id)
    if (!infoPizza) {
      throw new Error('Pizza invalid.')
    }

    return {
      ...infoPizza,
      quantity: item.quantity,
    }
  })

  const deliveryFee = 3.5

  const totalItemPrice = pizzaInCart.reduce(
    (total, item) => (total += item.price * item.quantity),
    0,
  )

  const { register, handleSubmit, formState, watch, setError, setValue } =
    useForm<DataProps>({
      mode: 'onBlur',
      resolver: zodResolver(OrderSchema),
    })

  const selectedPaymentOption = watch('paymentMethod')

  function handleStateChange(e: ChangeEvent<HTMLInputElement>) {
    const UpperCaseState = e.target.value.toUpperCase()
    e.target.value = UpperCaseState
  }

  function handleCepChange(e: ChangeEvent<HTMLInputElement>) {
    const formattedOnlyDigits = e.target.value.replace(/\D/g, '')

    const formattedWithHyphen =
      formattedOnlyDigits.length > 5
        ? `${formattedOnlyDigits.slice(0, 5)}-${formattedOnlyDigits.slice(5)}`
        : formattedOnlyDigits

    e.target.value = formattedWithHyphen
  }

  function setCepErrorMessage(message: string) {
    setError('cep', { type: 'custom', message })
  }

  function setCepAddressData(data: CepAddressData) {
    setValue('street', data.street)
    setValue('neighborhood', data.neighborhood)
    setValue('city', data.city)
    setValue('state', data.state)
  }

  useEffect(() => {
    const storedLastAddressJSON = localStorage.getItem(
      '@pizza-delivery:last-address-1.0.0',
    )

    const storedLastAddress = storedLastAddressJSON
      ? JSON.parse(storedLastAddressJSON)
      : null

    if (storedLastAddress) {
      setValue('cep', storedLastAddress.cep)
      setValue('street', storedLastAddress.street)
      setValue('neighborhood', storedLastAddress.neighborhood)
      setValue('city', storedLastAddress.city)
      setValue('state', storedLastAddress.state)
    }
  }, [setValue])

  const handleSubmitOrderCheckout: SubmitHandler<DataProps> = (item) => {
    createOrder({ data: item, total: totalItemPrice + deliveryFee })
  }

  return (
    <CartContainer>
      <FormContainer
        id="order"
        onSubmit={handleSubmit(handleSubmitOrderCheckout)}
      >
        <h1>Complete o seu pedido</h1>
        <AddressData>
          <Header>
            <MapPin size={32} />
            <div>
              <h1>Endereço de Entrega</h1>
              <strong>Informe o endereço onde deseja receber o pedido</strong>
            </div>
          </Header>
          <AddressInputs>
            <TextInput
              type="text"
              placeholder="CEP"
              maxLength={9}
              styledProps={{ style: { gridArea: 'cep' } }}
              {...register('cep', { onChange: handleCepChange })}
              error={formState.errors.cep}
              setErrorMessage={setCepErrorMessage}
              setCepAddressData={setCepAddressData}
            />
            <TextInput
              type="text"
              placeholder="Rua"
              styledProps={{ style: { gridArea: 'street' } }}
              {...register('street')}
              error={formState.errors.street}
            />
            <TextInput
              type="text"
              placeholder="Número"
              styledProps={{ style: { gridArea: 'number' } }}
              {...register('number')}
              error={formState.errors.number}
            />
            <TextInput
              type="text"
              placeholder="Complemento"
              styledProps={{ style: { gridArea: 'complement' } }}
              {...register('complement')}
              optional={true}
            />
            <TextInput
              type="text"
              placeholder="Bairro"
              styledProps={{ style: { gridArea: 'neighborhood' } }}
              {...register('neighborhood')}
              error={formState.errors.neighborhood}
            />
            <TextInput
              type="text"
              placeholder="Cidade"
              styledProps={{ style: { gridArea: 'city' } }}
              {...register('city')}
              error={formState.errors.city}
            />
            <TextInput
              type="text"
              placeholder="Estado"
              maxLength={2}
              styledProps={{ style: { gridArea: 'state' } }}
              {...register('state', { onChange: handleStateChange })}
              error={formState.errors.state}
            />
          </AddressInputs>
        </AddressData>
        <PaymentData>
          <Header>
            <CurrencyDollar size={32} color="#19c040" />
            <div>
              <h1>Pagamento</h1>
              <strong>
                O pagamento é feito na entrega. Escolha como deseja pagar
              </strong>
            </div>
          </Header>
          <OptionsContainer>
            <RadioInput
              isSelected={selectedPaymentOption === 'credit'}
              {...register('paymentMethod')}
              value="credit"
            >
              <CreditCard size={28} />
              <span>Cartão de Crédito</span>
            </RadioInput>

            <RadioInput
              isSelected={selectedPaymentOption === 'debit'}
              {...register('paymentMethod')}
              value="debit"
            >
              <Bank size={28} />
              <span>Cartão de Débito</span>
            </RadioInput>

            <RadioInput
              isSelected={selectedPaymentOption === 'cash'}
              {...register('paymentMethod')}
              value="cash"
            >
              <Money size={28} />
              <span>Dinheiro</span>
            </RadioInput>
          </OptionsContainer>
          <PaymentErrorMessage>
            {formState.errors.paymentMethod
              ? formState.errors.paymentMethod.message
              : null}
          </PaymentErrorMessage>
        </PaymentData>
      </FormContainer>
      <CartInfo>
        <h1>Pizzas selecionadas</h1>
        <section>
          <CartList>
            {pizzaInCart.map((item) => {
              return (
                <PizzaFragment key={item.id}>
                  <div>
                    <img src={item.image} alt={item.flavour} />
                    <InputsContainer>
                      <strong>{item.flavour}</strong>
                      <div>
                        <AmountInput
                          amount={item.quantity}
                          incrementAmount={() => {
                            incrementItem(item.id)
                          }}
                          decrementAmount={() => {
                            decrementItem(item.id)
                          }}
                        />
                        <RemoveButton
                          onClick={() => {
                            removeItem(item.id)
                          }}
                        >
                          <Trash size={22} />
                          Remover
                        </RemoveButton>
                      </div>
                    </InputsContainer>
                  </div>
                  <span>
                    {new Intl.NumberFormat('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                    }).format(item.price)}
                  </span>
                </PizzaFragment>
              )
            })}
          </CartList>
          <FinishOrder>
            <TotalInfo>
              <TotalItems>
                <p>Total dos Itens</p>
                <span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItemPrice)}
                </span>
              </TotalItems>
              <DeliveryPrice>
                <p>Entrega</p>
                <span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(deliveryFee)}
                </span>
              </DeliveryPrice>
              <TotalPrice>
                <p>Total</p>
                <span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItemPrice + deliveryFee)}
                </span>
              </TotalPrice>
            </TotalInfo>
            <button
              disabled={!pizzaInCart.length}
              title={
                !pizzaInCart.length ? 'Adicione algum item ao carrinho' : ''
              }
              type="submit"
              form="order"
            >
              Confirmar pedido
            </button>
          </FinishOrder>
        </section>
      </CartInfo>
    </CartContainer>
  )
}
