import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import Restaurant from './components/Body/Restaurant/Restaurant';
import Support from './components/Header/Support/Support'
import { restaurants_localData } from './helper/staticData';
import About from './components/Header/About/About';
import Cart from './components/Header/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Shimmer from './components/Shimmer';
import Body from './components/Body/Body';
import ReactDOM from 'react-dom/client';
import Error from './components/Error';
import { Provider } from 'react-redux';
import store from './redux/store';

// lazy import
const Profile = lazy(() => import('./components/Header/About/Profile'));



const AppLayout = () => {

    const [restaurants, setRestaurants] = useState(restaurants_localData);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants_localData);

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        try {
            // const response = await fetch(FETCH_RESTAURANTS_URL);
            // const data = await response.json();

            // console.log(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // console.log(restaurants);

            // setRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // setFilteredRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setRestaurants(restaurants);
            setFilteredRestaurants(restaurants);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <>
            <Provider store={store} >
                <Header restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />
                <Outlet context={{ restaurants, filteredRestaurants }} />
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
                path: "cart",
                element: <Cart />
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