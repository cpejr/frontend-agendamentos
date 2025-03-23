import { StyledButtonCategory } from "./Styles";

function ButtonCategory({children, onClick}) {
    return (
            <StyledButtonCategory onClick={onClick}>
                {children}
            </StyledButtonCategory>
    );
}

export default ButtonCategory;
