import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { RouterProvider, Link } from "react-router-dom";
import { Header } from "../Header";


export const App = () => {
    return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>)
};