import { Link } from "react-router-dom"
import ConnectFour from "../assets/connectFour.png"
import TicTacToe from "../assets/ticTacToe.png"
import Lightning from "../assets/lightning.png"
import StarValue from "../assets/starValue.png"
import EmptyValue from "../assets/emptyValue.png"
import "./Home.css"
import { useState } from "react"

function Home() {
    const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };
    return(
        <>
       <div className="containerulHome mb-10">
        <div className="noMobileJocuriDisponibile"> 
        <h1 className="flex text-4xl font-sans text-orange-400 font-semibold ml-60 mt-6">
            <img className="jocuriDisponibile" src={Lightning} alt="lightning image" />Jocuri disponibile<span>(2)</span></h1>
        </div>

        <div className="pentruMobile">
            <img  src={Lightning} alt="lightning image" />
            <h1>Jocuri disponibile<span>(2)</span></h1>
        </div>

            <div className="infoPoinNoMobile">
                <h2 className="text-center mt-6">*Partidă câștigată: <span className="condiziPuncte bg-green-600 text-white p-1 mr-10">+5 puncte. </span> 
                Dacă pierzi: <span className="condiziPuncte bg-red-600 text-white p-1">-5 puncte</span>*</h2>
            </div>

            <div className="infoPointForMobile">
                <div className="flex justify-center">
                    <h1 className="mr-6">Win: <span className="text-green-600">+5P</span></h1>
                    <h1 className="ml-6">Lose: <span className="text-red-600">+5P</span></h1>
                </div>
            </div>
       <div className="noForMobile">
       <div className="burduz mx-40 flex flex-col justify-center mt-10 bg-gray-200">
            <div className="responsivos flex relative">
                <img className="game_image" src={ConnectFour} alt="connect four image" />
                <div className="flex flex-col p-4">
                    <h4 className="hiddenCategorie text-sm pb-4 text-gray-400">Strategie</h4>
                    <h1 className="text-2xl pb-4 font-bold">Connect Four</h1>

                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                    <img
                    key={index}
                    className="steaua"
                    src={index < rating ? StarValue : EmptyValue}
                    alt={index < rating ? "star valutation" : "star valutation empty"}
                    onClick={() => handleClick(index + 1)}/>))}
                </div>

                    <p className="paragrafJoc text-gray-500 pt-4">Connect Four este un joc de masă de strategie în care doi jucători se confruntă pentru a-și 
                    plasa piesele într-o grilă verticală, încercând să alinieze patru într-o linie.</p>
                    <Link to="/board" className="play_btn bg-red-600 text-white w-32 px-4 py-2 mt-6 rounded-xl">Joacă</Link>
                </div>
            </div>
        </div>
       </div>

        <div className="mobileLinkGame mt-2 mx-6">
            <div>
                <div className="flex flex-col">
                    <img src={ConnectFour} alt="connect four image" />
                    <h1 className="text-2xl pb-4 font-bold">Connect Four</h1>
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                    <img
                    key={index}
                    className="steaua"
                    src={index < rating ? StarValue : EmptyValue}
                    onClick={() => handleClick(index + 1)}/>))}
                </div>
                    <p className="paragrafMobile text-gray-500 pt-4">Connect Four este un joc de masă de strategie în care doi jucători se confruntă pentru a-și 
                    plasa piesele într-o grilă verticală, încercând să alinieze patru într-o linie.</p>
                    <Link to="/board" className="play_btn bg-red-600 text-white w-32 px-4 py-2 mt-6 rounded-xl">Joacă</Link>
                </div>
            </div>
        </div>

        <div className="noForMobile">
        <div className="burduz mx-40 flex flex-col justify-center mt-10 bg-gray-200">
            <div className="responsivos flex relative">
                <img className="game_image" src={TicTacToe} alt="connect four image" />
                <div className="flex flex-col p-4">
                    <h4 className="hiddenCategorie text-sm pb-4 text-gray-400">Strategie</h4>
                    <h1 className="text-2xl pb-4 font-bold">Tic Tac Toe</h1>
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                    <img
                    key={index}
                    className="steaua"
                    src={index < rating ? StarValue : EmptyValue}
                    alt={index < rating ? "star valutation" : "star valutation empty"}
                    onClick={() => handleClick(index + 1)}/>))}
                </div>
                    <p className="paragrafJoc text-gray-500 pt-4">Tic Tac Toe este un joc clasic de masă în care doi jucători se succed în plasarea
                     semnelor lor, X și O, pe o tablă 3x3. Scopul este să obții o linie,
                     coloană sau diagonală de trei semne consecutive..</p>
                    <Link to="/tictactoe" className="play_btn bg-red-600 text-white w-32 px-4 py-2 mt-6 rounded-xl">Joacă</Link>
                </div>
            </div>
        </div>
        </div>

        <div className="mobileLinkGame mt-10 mx-6">
            <div>
                <div className="flex flex-col">
                    <img src={TicTacToe} alt="connect four image" />
                    <h1 className="text-2xl pb-4 font-bold">Tica Tac Toe</h1>
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                    <img
                    key={index}
                    className="steaua"
                    src={index < rating ? StarValue : EmptyValue}
                    alt={index < rating ? "star valutation" : "star valutation empty"}
                    onClick={() => handleClick(index + 1)}/>))}
                </div>
                    <p className="paragrafMobile text-gray-500 pt-4">Tic Tac Toe este un joc clasic de masă în care doi jucători se succed în plasarea
                     semnelor lor, X și O, pe o tablă 3x3. Scopul este să obții o linie,
                     coloană sau diagonală de trei semne consecutive..</p>
                    <Link to="/tictactoe" className="play_btn bg-red-600 text-white w-32 px-4 py-2 mt-6 rounded-xl">Joacă</Link>
                </div>
            </div>
        </div>

       </div>
        </>
    )
}
export default Home