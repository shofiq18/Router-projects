import PropTypes from "prop-types";
import { AiFillCheckCircle  } from "react-icons/ai";


const Features = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-2 "> <AiFillCheckCircle className="text-blue-500" />{feature}</p>
        </div>
    );
};
Features.propTypes = {
    feature: PropTypes.string
}
export default Features;