import { StyledButtonCategory } from "./Styles";
import PropTypes from 'prop-types';

export default function ButtonCategory({children, onClick}) {
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
