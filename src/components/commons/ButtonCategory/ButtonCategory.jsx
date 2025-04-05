import { StyledButtonCategory } from "./Styles";
import PropTypes from 'prop-types';

function ButtonCategory({children, onClick}) {
    return (
            <StyledButtonCategory onClick={onClick}>
                {children}
            </StyledButtonCategory>
    );
}

ButtonCategory.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default ButtonCategory;
