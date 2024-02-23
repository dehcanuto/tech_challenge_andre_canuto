import { CardPropType } from "./types";

const Card = ({ children }: CardPropType) => {
    return (
        <div className="relative p-5 h-fit bg-gray-800 font-semibold rounded-3xl shadow-xl">
            {children}
        </div>
    )
}

export default Card;