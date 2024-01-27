import Products from "../pages/Products";
import DeleteProduct from "../pages/DeleteProduct";
import UpdateProduct from "../pages/UpdateProduct";
import Profile from "../pages/Profile";
import AddProduct from "../pages/AddProduct";

const ROUTES = [
    {
        path: "/",
        element: <Products />
    },
    {
        path: "/delete",
        element: <DeleteProduct />
    },
    {
        path: "/update",
        element: <UpdateProduct />
    },
    {
        path: "/add",
        element: <AddProduct />
    },
    {
        path: "/profile",
        element: <Profile />
    },
]

export default ROUTES;