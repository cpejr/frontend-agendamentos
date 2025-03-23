
import { StyledButtonEnter } from "./Styles";

function ButtonEnter({children, onClick}) {
    return (
            <StyledButtonEnter onClick={onClick}>
                {children}
            </StyledButtonEnter>
    );
}

export default ButtonEnter;