import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route element={<HomePage />} path="/" />
                <Route element={<MenuPage />} path="/menu" />
                <Route element={<AboutUsPage />} path="/about" />
                <Route element={<ContactUsPage />} path="/contact" />
                <Route element={<NotFoundPage />} path="/*" />
            </Routes>
        </>
    );
};

export default App;
