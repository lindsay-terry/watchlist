import { createBrowserRouter } from "react-router-dom";

import App from './App';
import Error from './endpoints/Error';
import Home from './endpoints/Home';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
        ]
    }
]);

export default router;