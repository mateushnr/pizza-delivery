import { Actions } from './actions'
import { DataProps } from '../../pages/Cart/index'

export interface Item {
  id: number
  quantity: number
}

export interface Order {
  data: DataProps
  total: number
}

export interface OrderCheckout {
  id: number
  items: Item[]
  data: DataProps
  total: number
}

type stateType = {
  cart: Item[]
  orders: OrderCheckout[]
}

export function reducer(state: stateType, action: Actions) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const isItemInCart = state.cart.some(
        (item) => item.id === action.payload.item.id,
      )

      if (isItemInCart) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.item.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.item.quantity,
            }
          }

          return item
        })

        return { cart: updatedCart, orders: state.orders }
      } else {
        return {
          cart: [...state.cart, action.payload.item],
          orders: state.orders,
        }
      }
    }
    case 'INCREMENT_ITEM': {
      const cartItemWithAmountIncremented = state.cart.map((item) => {
        if (item.id === action.payload.itemId)
          return { ...item, quantity: item.quantity + 1 }

        return item
      })

      return { cart: cartItemWithAmountIncremented, orders: state.orders }
    }
    case 'DECREMENT_ITEM': {
      const cartItemWithAmountDecremented = state.cart.map((item) => {
        if (item.id === action.payload.itemId && item.quantity > 1)
          return { ...item, quantity: item.quantity - 1 }

        return item
      })

      return {
        cart: [...cartItemWithAmountDecremented],
        orders: state.orders,
      }
    }
    case 'REMOVE_ITEM': {
      const cartWithItemRemoved = state.cart.filter((item) => {
        return item.id !== action.payload.itemId
      })

      return { cart: [...cartWithItemRemoved], orders: state.orders }
    }
    case 'CREATE_ORDER': {
      const newOrderId = new Date().getTime()

      const lastAddressJSON = JSON.stringify(action.payload.data)

      localStorage.setItem(
        '@pizza-delivery:last-address-1.0.0',
        lastAddressJSON,
      )

      action.payload.navigate(`/order/${newOrderId}/success`)

      return {
        cart: [],
        orders: [
          ...state.orders,
          {
            id: newOrderId,
            items: state.cart,
            data: action.payload.data,
            total: action.payload.total,
          },
        ],
      }
    }
    default:
      return state
  }
}
