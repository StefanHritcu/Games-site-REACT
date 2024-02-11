import { useSelector } from "react-redux"
import "./Info.css"

function Info() {
    const puncteActuale = useSelector(state => state.game.puncte);
    return(
        <>
        <div className="superMobile">
        <div className="ml-32">
    
    <div className="flex justify-center py-6">
        <h1 className="erMussHidden puncteleTaleHidden absolute mt-1 bg-green-700 px-4 py-2 text-white left-36">Punctele tale: {puncteActuale}</h1>
        <h1 className="erMussHidden mr-20 bg-red-600 px-4 py-2 text-white">Puncte necesare ca sa ajungi la nivelil respectiv</h1>
        <div className="anotherSuperMobile">
            <h1 className="infoRed ml-20 bg-red-600 px-4 py-2 text-white">Puncte necesare totale pentru orice nivel</h1>
        </div>
    </div>

    <div className="bubuSettete">
    <div className="flex flex-col">
        <div className="flex mb-10">
            <h1 className="ml-12">Nivel 2</h1>
            <h1 className="punctee">5 Puncte</h1>
            <h1 className="totalPuncte">5 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1 className="ml-12">Nivel 3</h1>
            <h1 className="punctee">7 Puncte</h1>
            <h1 className="totalPuncte">12 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1 className="ml-12">Nivel 4</h1>
            <h1 className="punctee">10 Puncte</h1>
            <h1 className="totalPuncte">22 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1 className="ml-12">Nivel 5</h1>
            <h1 className="punctee">15 Puncte</h1>
            <h1 className="totalPuncte">37 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1 className="ml-12">Nivel 6</h1>
            <h1 className="punctee">23 Puncte</h1>
            <h1 className="totalPuncte">60 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1 className="ml-12">Nivel 7</h1>
            <h1 className="punctee">30 Puncte</h1>
            <h1 className="totalPuncte">90 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1 className="ml-12">Nivel 8</h1>
            <h1 className="punctee">35 Puncte</h1>
            <h1 className="totalPuncte">125 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1 className="ml-12">Nivel 9</h1>
            <h1 className="punctee">45 Puncte</h1>
            <h1 className="totalPuncte">170 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1 className="ml-12">Nivel 10</h1>
            <h1 className="punctee">80 Puncte</h1>
            <h1 className="totalPuncte">250 Puncte</h1>
        </div>
    </div>
    </div>


    <div className="bubuMobile">
    <div className="flex flex-col">
        <div className="flex mb-10">
            <h1>Nivel 2</h1>
            <h1 className="totalPuncte">5 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1>Nivel 3</h1>
            <h1 className="totalPuncte">12 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1>Nivel 4</h1>
            <h1 className="totalPuncte">22 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1>Nivel 5</h1>
            <h1 className="totalPuncte">37 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1>Nivel 6</h1>
            <h1 className="totalPuncte">60 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1>Nivel 7</h1>
            <h1 className="totalPuncte">90 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1>Nivel 8</h1>
            <h1 className="totalPuncte">125 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1>Nivel 9</h1>
            <h1 className="totalPuncte">170 Puncte</h1>
        </div>

        <div className="flex mb-10">
            <h1>Nivel 10</h1>
            <h1 className="totalPuncte">250 Puncte</h1>
        </div>
    </div>
    </div>
</div>
        </div>
        </>
    )
}
export default Info