import { useDispatch, useSelector } from "react-redux"
import "./Welcome.css"
import { setImgSelected, setLogged, setNicknameRedux } from "../redux/gameSlice";
import MenOne from "../assets/men1.png"
import MenTwo from "../assets/men2.png"
import MenTree from "../assets/men3.png"
import WomenOne from "../assets/women1.png"
import WomenTwo from "../assets/women2.png"
import WomenTree from "../assets/women3.png"
import { useState } from "react";
import WelcomeSmile from "../assets/welcomeSmile.png"

function Welcome() {

    const [alegMen, setAlegMen] = useState(false);
    const [alegWomen, setAlegWomen] =useState(false);


    const [selectedCheckBox, setSelectedCheckBox] = useState(null);
    const handleCheckBoxChange = (name) => {
        setSelectedCheckBox(name);
        if(name === "men"){
            setAlegMen(true);
            setAlegWomen(false);
        }else if(name === "women"){
            setAlegWomen(true);
            setAlegMen(false);
        }
    }
    const dispatch = useDispatch();

    const handleImgSelected = (imageSelected) => {
        dispatch(setImgSelected(imageSelected));
        
    }

    const [nickname, setNickname] = useState("");
    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    }

    const imgAlesa = useSelector(state => state.game.imgSelected);
    const handleLogin = () => {
        if(!imgAlesa && !nickname){
            setTrebueAmbele(true);
            setTrebueImg(false);
            setTrebueNick(false);
            return;
        }
        if(!nickname){
            setTrebueNick(true);
            setTrebueAmbele(false);
            setTrebueImg(false);
            return;
        }
        if(!imgAlesa){
            setTrebueImg(true);
            setTrebueAmbele(false);
            setTrebueNick(false);
            return;
        }

        dispatch(setNicknameRedux(nickname))
        dispatch(setLogged(true));
    }

    const esteLogat = useSelector(state => state.game.logged);

    const [trebueNick, setTrebueNick] = useState(false);
    const [trebueImg, setTrebueImg] = useState(false);
    const [trebueAmbele, setTrebueAmbele] = useState(false);

    return(
        <>
        <div className={`bineAiVenit flex flex-col ${esteLogat ? "hidden" : "block"}`}>
            <h1 className="vienis text-center mt-12 font-semibold text-4xl flex justify-center">Bine ai venit!
            <img className="smileImg ml-2" src={WelcomeSmile} alt="welcome smile image" />
            </h1>
            <h3 className="profilFati colorful-background text-center py-6 text-2xl font-light">Înainte de a accesa site-ul de jocuri, creează-ți profilu.</h3>
            
            <div className="chooses flex justify-center">

                <label className="flex items-center">
                    <input type="checkbox" name="men" 
                    checked={selectedCheckBox === "men"}
                    onChange={() => handleCheckBoxChange("men")}/>
                    <h1 className="ml-2 text-2xl">Men</h1>
                </label>

                <label className="flex items-center ml-4">
                    <input type="checkbox" name="women"
                    checked={selectedCheckBox === "women"}
                    onChange={() => handleCheckBoxChange("women")}/>
                    <h1 className="ml-2 text-2xl">Women</h1>
                </label>
            </div>

            <div className={`flex caractereDeAles ${alegMen ? "block" : "hidden"}`}>
                <img onClick={() => {handleImgSelected("m1")}} className="caracter cursor-pointer" src={MenOne} alt="men icon 1" title="Alege caracterul" />
                <img onClick={() => {handleImgSelected("m2")}} className="caracter cursor-pointer" src={MenTwo} alt="men icon 2" title="Alege caracterul" />
                <img onClick={() => {handleImgSelected("m3")}} className="caracter cursor-pointer" src={MenTree} alt="men icon 3" title="Alege caracterul" />
            </div>

            <div className={`flex caractereDeAles ${alegWomen ? "block" : "hidden"}`}>
                <img onClick={() => {handleImgSelected("w1")}} className="caracter cursor-pointer" src={WomenOne} alt="women icon 1" title="Alege caracterul" />
                <img onClick={() => {handleImgSelected("w2")}} className="caracter cursor-pointer" src={WomenTwo} alt="women icon 2" title="Alege caracterul" />
                <img onClick={() => {handleImgSelected("w3")}} className="caracter cursor-pointer" src={WomenTree} alt="women icon 3" title="Alege caracterul" />
            </div>


            {/* NICKNAME INPUT */}
            <div className="inputNickname flex px-4 py-2 absolute bottom-40">
                <h1 className="textInputInfo mr-4 bg-yellow-500 px-4 py-2">Creează un nume de fantezie</h1>
                <input className="creazaNick text-center" type="text" value={nickname}
                onChange={handleNicknameChange} 
                placeholder="Creeaza nickname..."/>
            </div>

            <button className="startGame absolute bottom-10 bg-red-600 text-white text-2xl px-6 py-4" onClick={handleLogin}>Incepe distractia</button>
            <p className={`atentie absolute bottom-2 ${trebueNick ? "block" : "hidden"}`}><span className="text-red-700 text-3xl">*</span>Introdu numele de utilizator</p>
            <p className={`atentie absolute bottom-2 ${trebueImg ? "block" : "hidden"}`}><span className="text-red-700 text-3xl">*</span>Alege Imaginea</p>
            <p className={`atentie absolute bottom-2 ${trebueAmbele ? "block" : "hidden"}`}><span className="text-red-700 text-3xl">*</span>Alege Imaginea si numele de utilizator</p>
        </div>
        </>
    )
}
export default Welcome