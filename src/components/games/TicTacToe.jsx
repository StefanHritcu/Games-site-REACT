import Cross from "../assets/cross.png";
import Circle from "../assets/circle.png";
import { useState } from "react";
import { useRef } from "react";
import "./game.css"
import { setCircle, setCross, setPuncte } from "../redux/gameSlice"
import { useDispatch, useSelector } from "react-redux";

let data = ["", "", "", "", "", "", "", "", ""];
function TicTacToe() {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if(lock) {
      return 0;
    }
    if(count%2===0)
    {
      e.target.innerHTML = `<img class="img" src="${Cross}">`;
      data[num] = "x";
      setCount(++count)
    }
    else
    {
      e.target.innerHTML = `<img class="img"  src="${Circle}">`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  }

  const checkWin = () => {
    if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
    {
      won(data[2]);
    }
    else if(data[3]==data[4] && data[4]===data[5] && data[5]!=="")
    {
      won(data[5]);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
    {
      won(data[8]);
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
    {
      won(data[6]);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
    {
      won(data[7]);
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
    {
      won(data[8]);
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
    {
      won(data[8]);
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
    {
      won(data[6]);
    }
  }
  

  const crossy = useSelector(state => state.game.cross);
  const circly = useSelector(state => state.game.circle);
  const dispatch = useDispatch();

  const puncteActuale = useSelector(state => state.game.puncte);

  const won = (winner) => {
    setLock(true);
    if(winner === "x")
    {
      titleRef.current.innerHTML = `Congratulations: <img class="win_img" src="${Cross}">Wins`;
      dispatch(setCross(+1));
      dispatch(setPuncte(puncteActuale +5));
    }
    else if(winner === "o")
    {
      titleRef.current.innerHTML = `Congratulations: <img class="win_img" src="${Circle}">Wins`;
      dispatch(setCircle(+1));
      dispatch(setPuncte(puncteActuale -5));
    }
    else
     {
      titleRef.current.innerHTML = `DRAW`;
      dispatch(setPuncte(puncteActuale +2));
    }
  }

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe in <span class="text-sky-400 ml-2">React</span>`;
    boxArray.map((e) => {
      e.current.innerHTML = "";
    })
  }
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9]



  return(
    <>
    <div className="responsiveTicTac">
    <div className="bg-slate-800 text-white pb-14">
      <h1 className="text-2xl w-screen font-mono pt-12 pb-6 text-center" ref={titleRef}>Tic Tac Toe in <span className="text-sky-400 ml-2"> React</span></h1>
      <h1 className="text-center mb-4"><span className="text-red-500">Atenție:</span> Tu reprezinți semnul <span className="text-yellow-400 font-bold">X</span>.</h1>

      <div className="container w-80 h-80 pb-10 flex flex-col gap-4 mx-auto">


        <div className="flex gap-4">
          <div className="w-24 h-24 bg-slate-700" ref={box1} onClick={(e) => {toggle(e,0)}}></div>
          <div className="w-24 h-24 bg-slate-700" ref={box2} onClick={(e) => {toggle(e,1)}}></div>
          <div className="w-24 h-24 bg-slate-700" ref={box3} onClick={(e) => {toggle(e,2)}}></div>
        </div>

        <div className="flex gap-4">
          <div className="w-24 h-24 bg-slate-700" ref={box4} onClick={(e) => {toggle(e,3)}}></div>
          <div className="w-24 h-24 bg-slate-700" ref={box5} onClick={(e) => {toggle(e,4)}}></div>
          <div className="w-24 h-24 bg-slate-700" ref={box6} onClick={(e) => {toggle(e,5)}}></div>
        </div>

        <div className="flex gap-4">
          <div className="w-24 h-24 bg-slate-700" ref={box7} onClick={(e) => {toggle(e,6)}}></div>
          <div className="w-24 h-24 bg-slate-700" ref={box8} onClick={(e) => {toggle(e,7)}}></div>
          <div className="w-24 h-24 bg-slate-700" ref={box9} onClick={(e) => {toggle(e,8)}}></div>
        </div>

      </div>

      <div className="flex justify-center mt-4">
        <div className="flex items-center">
          <img className="w-8 h-8 mr-2" src={Cross} alt="cross image" />
          <h1 className="mr-8">{crossy}</h1>
        </div>

        <div className="flex items-center">
          <img className="w-8 h-8 mr-2" src={Circle} alt="circle image" />
          <h1>{circly}</h1>
        </div>
      </div>

      <div className="flex justify-center mx-auto">
          <button className="mt-10 px-10 py-4 font-bold rounded-xl bg-sky-700" onClick={() => {reset()}}>Reset</button>
      </div>
    </div>
    </div>
    </>
  )
}
export default TicTacToe;