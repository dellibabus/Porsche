import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Models from "./Components/Models";
import CenterPorsche from "./Components/CenterPorsche";
import Discover from "./Components/Discover";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Models />
            <CenterPorsche />
            <Discover />
            <Footer />
        </>
    );
};

export default App;
