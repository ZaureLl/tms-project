
import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesContainer from "./PagesContainer/PagesContainer";
import SignIn from "./SignIn";
import Home from "./Home";
import SignUp from "./SignUp";
import Success from "./Success";
import Error from "./Error";

export enum RoutesList {
    Home = "/",
    SinglePost = "/blog/:id",
    Search = "/blog/search",
    AddPost = '/blog/add',
    SignIn = "/sign-in",
    SignUp = "/sign-up",
    Confirm = "/sign-up/confirm",
    Success = "/sign-up/success",
    Default = "*",
}

const Router = () => {
    const isLoggeed = "false";

    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesList.Home} element={<PagesContainer />}>
                    <Route path={RoutesList.Home} element={<Home />} />
                    <Route path={RoutesList.SignIn} element={<SignIn />} />
                    <Route path={RoutesList.SignUp} element={<SignUp />} />
                    <Route path={RoutesList.Success} element={<Success />} />
                    <Route path={RoutesList.AddPost} element={isLoggeed ? <Home /> : <Navigate to={RoutesList.SignIn} />} />
                    <Route path={RoutesList.Default} element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;