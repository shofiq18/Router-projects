
import PropTypes from "prop-types";
import Features from "./Features/Features";
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="border-2 border-green-500 p-8 flex flex-col  rounded-lg bg-blue-800 space-y-4 overflow-hidden text-center">
            <h2>
                <span className="text-7xl ">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-2xl font-bold">{name}</h4>
            <div className="flex-grow"> 
                {
                    features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                }
            </div>
            <button className="w-full py-2 bg-green-500 rounded-lg text-white  hover:bg-green-800">Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;