import PropTypes from 'prop-types'
import { StyledButtonEnter } from "./Styles";

export default function ButtonEnter({children, onClick}) {
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

