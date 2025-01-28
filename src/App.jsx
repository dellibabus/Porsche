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
            <div className="bg-gradient-to-l from-gray-900 to-gray-700">
                <Navbar />
                <Home />
                <About />
                <Models />
                <CenterPorsche />
                <Discover />
                <Footer />
            </div>

        </>
    );
};

export default App;
