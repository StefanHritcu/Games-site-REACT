import menOne from "../assets/men1.png"
import menTwo from "../assets/men2.png"
import MenTree from "../assets/men3.png"
import WomenOne from "../assets/women1.png"
import WomenTwo from "../assets/women2.png"
import WomenTree from "../assets/women3.png"
import { useSelector } from "react-redux";
import "./Clasament.css"


const sortPlayers = (players) => {
    return Object.entries(players)
      .sort(([, a], [, b]) => b.puncte - a.puncte)
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
  };
  
  function Clasament() {
    const { nicknameRedux, puncte, imgSelected } = useSelector((state) => state.game);
  
    const allPlayers = {
      Mihai: { puncte: 0, img: menOne },
      Gianina: { puncte: 15, img: WomenTwo },
      Razvan: { puncte: 30, img: menTwo },
      Petrica: { puncte: 40, img: MenTree },
      Maria: { puncte: 65, img: WomenOne },
      Vlad: { puncte: 105, img: MenTree },
      Ramona: { puncte: 150, img: WomenTree },
      Ioana: { puncte: 200, img: WomenOne },
      Nicu: { puncte: 230, img: menTwo },
      ["YOU"]: { puncte, img: menTwo },
    };
  
    const sortedPlayers = sortPlayers(allPlayers);
  
    return (
      <>
        <div>
          <h1 className="text-4xl font-black font-mono mt-4">Clasament</h1>

          {/*                                                 NO MOBILE VERSION                                                       */}
  
         <div className="noMobileVersion">
         <div className="flex justify-around mt-4">
            <div className="flex flex-col">
  
              {Object.entries(sortedPlayers).map(([playerName, playerData], index) => {
                if (index < 5) {
                  return (
                    <div key={playerName} className="flex items-center mt-6">
                      <div></div>
                      <div>
                        <h1 className="text-4xl px-4">{index + 1}</h1>
                      </div>
                      <div>
                        <img className="ml-6 w-12 h-12" src={playerData.img} alt="icon" />
                      </div>
                      <div>
                        <h1>{playerName}</h1>
                      </div>
                      <div>
                        <h1 className="font-semibold text-2xl ml-16">{playerData.puncte}P</h1>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
  
            <div className="flex flex-col ml-2">
  
              {Object.entries(sortedPlayers).map(([playerName, playerData], index) => {
                if (index >= 5) {
                  return (
                    <div key={playerName} className="flex items-center mt-6">
                      <div></div>
                      <div>
                        <h1 className="text-4xl px-4">{index + 1}</h1>
                      </div>
                      <div>
                        <img className="ml-6 w-12 h-12" src={playerData.img} alt="icon" />
                      </div>
                      <div>
                        <h1>{playerName}</h1>
                      </div>
                      <div>
                        <h1 className="font-semibold text-2xl ml-16">{playerData.puncte}P</h1>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
         </div>


         {/*                                                  MOBILE VERSION                                                       */}

     <div className="mobileVersion">
        <div className="flex justify-center">
           <div className="flex flex-col">
  
            {Object.entries(sortedPlayers).map(([playerName, playerData], index) => {
                return (
                  <div key={playerName} className="flex items-center mt-6">
              <div>
                  <h1 className="text-4xl px-4">{index + 1}</h1>
              </div>
              <div>
                  <img className="ml-6 w-12 h-12" src={playerData.img} alt="icon" />
              </div>
              <div>
                   <h1>{playerName}</h1>
              </div>
              <div>
                <h1 className="font-semibold text-2xl ml-16">{playerData.puncte}P</h1>
             </div>
           </div>
         );
            })}
       </div>
        </div>
         </div>

        </div>
      </>
    );
  }
  
  export default Clasament;