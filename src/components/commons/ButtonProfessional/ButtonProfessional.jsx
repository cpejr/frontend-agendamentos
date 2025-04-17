import PropTypes from 'prop-types';
import { StyledProfessionalButton } from "./Styles";

export default function ButtonProfessional({ children, onClick, style }) {
  return (
    <StyledProfessionalButton onClick={onClick} style={style}>
      {children}
    </StyledProfessionalButton>
  );
}


ButtonProfessional.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};
