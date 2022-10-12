import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home.jsx";
import { Register } from "./pages/register.jsx";
import { Login } from "./pages/login.jsx";
import { Private } from "./pages/private.jsx";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                
                <Navbar />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Register />} path="/register" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<Private />} path="/private" />
                    
                </Routes>
                <Footer />
                
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
