import { StyledBotaoCategoria } from "./Styles";

function BotaoCategoria({children, onClick}) {
    return (
            <StyledBotaoCategoria onClick={onClick}>
                {children}
            </StyledBotaoCategoria>
    );
}

export default BotaoCategoria;
