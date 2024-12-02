import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import router from './Routing.jsx';
import system from './utils/theme';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
