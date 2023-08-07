import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Header';
import Body from './src/Body';
import Footer from './src/Footer';



const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            {/* <Footer /> */}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);