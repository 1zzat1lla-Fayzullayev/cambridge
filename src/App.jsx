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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center fixed left-0 top-0 h-full w-full z-[1000] bg-white overflow-hidden"><img src="/loading-logo.svg" className="infinite-scale w-[80px] h-[80px]" alt="Loading..." /></div>
    )
  }
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <WhySelected />
      <SecondSwiper />
      <Teachers />
      <Footer />
    </>
  )
}

export default App