import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards'
import ProductDetails from './components/ProductDetails/ProductDetails';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch('../gadgets.json'),
          },
          {
            path: "/category/:category",
            element: <Cards></Cards>,
            loader: () => fetch('../gadgets.json'),
          },
        ],
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
        loader: () => fetch('../gadgets.json'),
      },
      {
        path: "/Statistics",
        element: <Statistics />,
        loader: () => fetch('../gadgets.json'),
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../gadgets.json'),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
