/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Header from "./components/header"
import Navbar from "./components/navbar"
import Cards from "./components/cards"
import WhySelected from "./components/whySelected"
import SecondSwiper from "./components/secondSwiper"
import Teachers from "./components/teachers"
import Footer from "./components/footer"

function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center fixed left-0 top-0 h-full w-full z-[1000] bg-white overflow-hidden"> <img
        src={theme === 'light' ? "/turkchasoati1.png" : "/turkchasoati2.png"}
        alt="Logo"
        className='w-36 lg:w-44'
      /></div>
    )
  }
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Header />
      <Cards />
      <WhySelected />
      <SecondSwiper />
      <Teachers />
      <Footer theme={theme} setTheme={setTheme} />
    </>
  )
}

export default App