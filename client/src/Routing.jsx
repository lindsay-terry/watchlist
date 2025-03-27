import { createBrowserRouter } from "react-router-dom";

import App from './App';
import Error from './endpoints/Error';
import Home from './endpoints/Home';
import UserProfile from './endpoints/UserProfile';


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
            {
                path: '/profile',
                element: <UserProfile />
            },
        ]
    }
]);

export default router;