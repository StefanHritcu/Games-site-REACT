import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Welcome from "./components/welcome/Welcome"
import TicTacToe from "./components/games/TicTacToe"
import Info from "./components/info/Info"
import { Board } from "./components/games/Board"
import Clasament from "./components/clasament/Clasament"
import Footer from "./components/footer/Footer"

function App() {
 

  return (
    <>
    <Header/>
    <Welcome/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="header" element={<Header/>} />
      <Route path="tictactoe" element={<TicTacToe/>} />
      <Route path="info" element={<Info/>} />
      <Route path="board" element={<Board/>} />
      <Route path="clasament" element={<Clasament/>} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App
