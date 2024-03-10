import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from './App'
import { Home } from './pages/Home/'
import { Menu } from './pages/Menu'
import { Cart } from './pages/Cart'
import { Success } from './pages/Success'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/menu',
          element: <Menu />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/order/:newOrderId/success',
          element: <Success />,
        },
      ],
    },
  ],
  { basename: '/pizza-delivery' },
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
