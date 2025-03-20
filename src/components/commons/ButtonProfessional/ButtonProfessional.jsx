import { StyledProfessionalButton } from "./Styles";

function ButtonProfessional({children, onClick}) {
    return (
            <StyledProfessionalButton onClick={onClick}>
                {children}
            </StyledProfessionalButton>
    );
}

export default ButtonProfessional;
