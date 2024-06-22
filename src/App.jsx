import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import CarList from "./components/CarList/CarList";
import Footer from "./components/Footer/Footer";
import Booking from "./components/Booking/Booking";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <ToastContainer />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <AboutUs />
      <CarList />
      <Booking />
      <Footer />
    </div>
  );
};

export default App;
