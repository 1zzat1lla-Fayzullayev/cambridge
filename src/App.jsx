/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Header from "./components/header"
import Navbar from "./components/navbar"

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
      <div className="flex flex-col items-center justify-center fixed left-0 top-0 h-full w-full z-[1000] bg-white overflow-hidden"><img src="/public/loading-logo.svg" className="infinite-scale w-[80px] h-[80px]" alt="Loading..." /></div>
    )
  }
  return (
    <>

      <Navbar />
      <Header />
    </>
  )
}

export default App