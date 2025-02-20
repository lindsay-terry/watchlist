import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom';
import router from './Routing.jsx';
// import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
