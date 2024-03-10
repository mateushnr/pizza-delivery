import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from './App'
import { Home } from './pages/Home/'
import { Menu } from './pages/Menu'
import { Cart } from './pages/Cart'
import { Success } from './pages/Success'

const router = createBrowserRouter([
  {
    path: '/pizza-delivery',
    element: <App />,
    children: [
      {
        path: '/pizza-delivery',
        element: <Home />,
      },
      {
        path: '/pizza-delivery/menu',
        element: <Menu />,
      },
      {
        path: '/pizza-delivery/cart',
        element: <Cart />,
      },
      {
        path: '/pizza-delivery/order/:newOrderId/success',
        element: <Success />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
