import TitleWeb from "./components/TitleWeb"
import CarouselWeb from "./components/CarouselWeb"
import Cookies from 'universal-cookie'
import { useEffect } from "react";

function App() {
  const cookies = new Cookies();

  useEffect(()=> {
    cookies.set('cookieReact', 'cookie de prueba', { path: '/' })
  }, [])
  return (
    <>
      <TitleWeb />
      <CarouselWeb />
    </>
  )
}

export default App
