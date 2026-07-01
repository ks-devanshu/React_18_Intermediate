import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
// import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    // { path: '/', element: <HomePage />},
    // { path: '/users', element: <UserListPage />},
    // { path: '/form', element: <ContactPage />},
    // { path: 'users/:id', element: <UserDetailPage /> }
    {path: '/', element: <HomePage />
    //     , children: [
    //      {path: 'login', element: <LoginPage />},
    //      {path: 'users/:id', element: <UserDetailPage />}
    // ]
    , errorElement: <ErrorPage />},
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        element: <PrivateRoutes />,
        children: [
            {path: '/users', element: <UserListPage />}
        ]
    }
]);
export default router;