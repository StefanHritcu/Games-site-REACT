import "./game.css"
import redToken from "../assets/blackToken.png"
import blackToken from "../assets/redToken.png"

export const Slot = ({ ch, y, x }) => {

    return (
        <div className='slot' x={x} y={y}>
            {ch && (
                <img src={ch === 'X' ? redToken : blackToken} width='100%' height='100%' />
            )}
        </div>
    );
};