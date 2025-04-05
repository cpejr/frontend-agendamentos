import PropTypes from 'prop-types'
import { StyledButtonEnter } from "./Styles";

function ButtonEnter({children, onClick}) {
    return (
            <StyledButtonEnter onClick={onClick}>
                {children}
            </StyledButtonEnter>
    );
}
ButtonEnter.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,  
};

export default ButtonEnter;