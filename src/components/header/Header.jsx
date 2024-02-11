import { useSelector } from "react-redux"
import GameLogo from "../assets/logoGame.png"
import MenOne from "../assets/men1.png"
import MenTwo from "../assets/men2.png"
import MenTree from "../assets/men3.png"
import WomenOne from "../assets/women1.png"
import WomenTwo from "../assets/women2.png"
import WomenTree from "../assets/women3.png"
import BottomArrow from "../assets/bottomArrow.png"
import { useEffect, useState } from "react"
import TopArrow from "../assets/topArrow.png"
import Info from "../assets/info.png"
import "./Header.css"
import { Link } from "react-router-dom"
import Ranking from "../assets/ranking.png"

function Header() {

    const imgSelectionata = useSelector(state => state.game.imgSelected);
    const characterImages = {
        "m1": MenOne,
        "m2": MenTwo,
        "m3": MenTree,
        "w1": WomenOne,
        "w2": WomenTwo,
        "w3": WomenTree,
    }

    const characterSelected = characterImages[imgSelectionata];
    const esteLogat = useSelector(state => state.game.logged);

    const nickname = useSelector(state => state.game.nickname);

    const [infoPuncte, setInfoPuncte] = useState(false);
    const handleOpenPuncte = () => {
        setInfoPuncte(!infoPuncte);
    }

    const puncteleActuale = useSelector(state => state.game.puncte);

    const nivelulActual = useSelector(state => state.game.nivel);
    const [nouNivel, setNouNivel] = useState(false);

    useEffect(() => {
        setNouNivel(true);
        const treiSecunde = setTimeout(() => {
            setNouNivel(false);
        }, 3000);
        return () => clearTimeout(treiSecunde)
    }, [nivelulActual])

    return(
        <>
        <div className="flex justify-around items-center z-10">
            <Link to="/" className="flex items-center p-2 text-4xl font-bold">
                <h1 className="logoTextSize">Games</h1>
                <img className="logoSize ml-1" src={GameLogo} alt="logo image" />
            </Link>

        
            <div className="hiddenInfo">
                <Link to="/info" className="hiddenInfo flex items-center cursor-pointer">
                    <h1 className="aflaMaiMult ml-20">Află mai multe despre niveluri și puncte</h1>
                    <span className="infoNivele">Info</span>
                    <img className="w-6 h-6 ml-1" src={Info} alt="info image" />
                </Link>
            </div>

           <div className="hiddenInfo">
                <Link to="/clasament" className="flex items-center cursor-pointer bg-yellow-300 px-5 py-1 font-semibold" title="Spre clasament">
                    <h1 >Clasament</h1>
                    <img src={Ranking} alt="ranking icon" />
                </Link>
           </div>


            <div className={`flex items-center ${esteLogat ? "block" : "hidden"}`}>
                <img src={esteLogat ? characterSelected : "hidden"} alt="" />
                <div>
                <h1 className="ml-1 mr-4 text-2xl font-bold">{nickname}</h1>
                <div className="flex items-center">
                    <h1 className="mx-2 text-red-600">Nivel: {nivelulActual}  <span className={`bg-green-600 text-white z-20 absolute right-4 top-16 p-2 ${nouNivel ? "visible" : "hidden"}`}>+1 Nivel</span></h1>

                    <img onClick={handleOpenPuncte} className={`w-6 h-6 absolute ml-16 cursor-pointer ${infoPuncte ? "hidden" : " block"}`} src={BottomArrow} alt="bottom arrow icon" title="Apasă pentru a afla despre live-uri" />
                    <img onClick={handleOpenPuncte} className={`w-8 h-8 absolute ml-16 cursor-pointer ${infoPuncte ? "block" : "hidden"}`} src={TopArrow} alt="top arrow icon" title="Inchide fereastra" />

                    <div className={`catePuncteMaiTrebue flex flex-col bg-yellow-300 absolute top-16 ${infoPuncte ? "block" : "hidden"}`}>
                        <h1>Punctele tale: {puncteleActuale}</h1>

                        <div className="apareInCaracter">
                            <Link to="/info">Info Nivele</Link>
                        </div>
                        <div className="apareInCaracter">
                            <Link to="/clasament">Clasament</Link>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header