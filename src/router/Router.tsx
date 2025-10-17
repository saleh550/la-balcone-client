import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MenuLayout from "../layout/menu-layout/MenuLayout";
import MainCategories from "../pages/MainCategories";
import MenuItems from "../pages/MenuItems";
import AuthLayout from "../layout/auth-layout/AuthLayout";
import { LoginPage } from "../pages/auth/login/LoginPage";
import MenuManagerLayout from "../layout/menu-manager-layout/MenuManagerLayout";
import MenuManagerPage from "../pages/menu-manager/MenuManagerPage";
// import AppLayout from "../layout/appLayout";
// import Home from "../pages/home/home";
// // import DetailsForm from "../pages/details/DetailsForm";
// import BuildManagement from "../pages/categories/build management/BuildManagement";
// import WeddingManagement from "../pages/categories/wedding/WeddingManagement";
// import TaskScheduling from "../pages/categories/task schaduling/TaskScheduling";
// import GuestManagement from "../pages/categories/guest management/GuestManagement";
// import Login from "../pages/auth/login/Login";
// import Signup from "../pages/auth/signup/Signup";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthLayout />,

        children: [
            {
                path: "/auth",
                element: <LoginPage />,
            },

        ],
    },
    {
        path: "/menu/maneger",
        element: <MenuManagerLayout />,

        children: [
            {
                path: "/menu/maneger",
                element: <MenuManagerPage />,
            },

        ],
    },
    {
        element: <MenuLayout />,
        //   errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element:
                    // <PrivateRoute>
                    <MainCategories />
                // </PrivateRoute>
                ,

            },
            {
                path: "/menu-items/:id",
                element:
                    // <PrivateRoute>
                    <MenuItems />
                // </PrivateRoute>
                ,
            }
            // {
            //     path: "/build/management",
            //     element:
            //         <PrivateRoute>
            //             <BuildManagement />
            //         </PrivateRoute>
            // },
            // {
            //     path: "/wedding",
            //     element:
            //         <PrivateRoute>
            //             <WeddingManagement />
            //         </PrivateRoute>
            // },
            // {
            //     path: "/task/scheduling",
            //     element:
            //         <PrivateRoute>
            //             <TaskScheduling />
            //         </PrivateRoute>
            // },
            // {
            //     path: "/guest/management",

            //     element:
            //         <PrivateRoute>
            //             <GuestManagement />
            //         </PrivateRoute>
            // },
            // {
            //     path: "/login",
            //     element: <Login />
            // },
            // {
            //     path: "/signup",
            //     element: <Signup />
            // }


        ],
    }
]);
const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;