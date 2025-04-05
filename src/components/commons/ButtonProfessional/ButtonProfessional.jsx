import PropTypes from 'prop-types';
import { StyledProfessionalButton } from "./Styles";

const ButtonProfessional = ({ children, onClick, className, style }) => {
  return (
    <StyledProfessionalButton 
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </StyledProfessionalButton>
  );
};

ButtonProfessional.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

ButtonProfessional.defaultProps = {
  className: '',
  style: {},
};

export default ButtonProfessional;