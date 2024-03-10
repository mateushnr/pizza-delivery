import { NavigateFunction } from 'react-router-dom'
import { DataProps } from '../../pages/Cart'
import { Order, Item } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  INCREMENT_ITEM = 'INCREMENT_ITEM',
  DECREMENT_ITEM = 'DECREMENT_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CREATE_ORDER = 'CREATE_ORDER',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.INCREMENT_ITEM
        | ActionTypes.DECREMENT_ITEM
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CREATE_ORDER
      payload: {
        data: DataProps
        total: number
        navigate: NavigateFunction
      }
    }

export function addItemAction(item: Item): Actions {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  }
}

export function incrementItemAction(id: number): Actions {
  return {
    type: ActionTypes.INCREMENT_ITEM,
    payload: {
      itemId: id,
    },
  }
}

export function decrementItemAction(id: number): Actions {
  return {
    type: ActionTypes.DECREMENT_ITEM,
    payload: {
      itemId: id,
    },
  }
}

export function removeItemAction(id: number): Actions {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId: id,
    },
  }
}

export function createOrderAction(
  order: Order,
  navigate: NavigateFunction,
): Actions {
  return {
    type: ActionTypes.CREATE_ORDER,
    payload: {
      data: order.data,
      total: order.total,
      navigate,
    },
  }
}
