import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Support from './components/Header/Support/Support'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Error from './components/Error';
import About from './components/Header/About/About';
import Restaurant from './components/Body/Restaurant/Restaurant';
import Shimmer from './components/Shimmer';
import { Provider } from 'react-redux';
import store from './redux/store';

// lazy import
const Profile = lazy(() => import('./components/Header/About/Profile'));



const AppLayout = () => {
    return (
        <>
            <Provider store={store} >
                <Header />
                <Outlet />
                <Footer />
            </Provider >
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        // errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "support",
                element: <Support />
            },
            {
                path: "about",
                element: <About />,
                children: [
                    {
                        path: 'profile',
                        element: (
                            <Suspense fallback={<Shimmer />}>
                                <Profile />
                            </Suspense>
                        )
                    }
                ]
            },
            {
                path: "restaurant/:restaurantId",
                element: <Restaurant />
            },
        ]
    }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);