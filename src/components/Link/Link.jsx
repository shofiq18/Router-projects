
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-12 hover:bg-yellow-600 text-black" ><a href={route.path}>{route.name}</a>
        </li>
    )
};
Link.propTypes = {
    route: PropTypes.object
}
export default Link;