import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"

export const authRoutes = [
    {
        path: '/admin',
        Component: Admin
    },
    {
        path: '/basket',
        Component: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: <Shop/>
    },
    {
        path: '/login',
        Component: <Auth/>
    },{
        path: '/registration',
        Component: <Auth/>
    },
    {
        path: '/device/:id',
        Component: <DevicePage/>
    }
]