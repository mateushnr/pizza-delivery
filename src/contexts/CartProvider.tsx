import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { OrderCheckout, reducer, Item, Order } from '../reducers/Cart/reducer'

import {
  addItemAction,
  createOrderAction,
  decrementItemAction,
  incrementItemAction,
  removeItemAction,
} from '../reducers/Cart/actions'
import { useNavigate } from 'react-router-dom'

interface CartContextType {
  cart: Item[]
  orders: OrderCheckout[]
  addItem: (payload: Item) => void
  incrementItem: (id: number) => void
  decrementItem: (id: number) => void
  removeItem: (id: number) => void
  createOrder: (order: Order) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    reducer,
    { cart: [], orders: [] },
    (cartState) => {
      const storedJsonCartState = localStorage.getItem(
        '@pizza-delivery:cart-state-1.0.0',
      )

      if (storedJsonCartState) {
        return JSON.parse(storedJsonCartState)
      }

      return cartState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@pizza-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  const navigate = useNavigate()

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function incrementItem(id: number) {
    dispatch(incrementItemAction(id))
  }

  function decrementItem(id: number) {
    dispatch(decrementItemAction(id))
  }

  function removeItem(id: number) {
    dispatch(removeItemAction(id))
  }

  function createOrder(order: Order) {
    dispatch(createOrderAction(order, navigate))
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        orders: cartState.orders,
        addItem,
        incrementItem,
        decrementItem,
        removeItem,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
