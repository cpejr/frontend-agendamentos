import { StyledBotaoProfissional } from "./Styles";

function BotaoProfissional({children, onClick}) {
    return (
            <StyledBotaoProfissional onClick={onClick}>
                {children}
            </StyledBotaoProfissional>
    );
}

export default BotaoProfissional;
