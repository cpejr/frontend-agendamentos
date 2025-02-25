import { StyleButton } from "./Styles";

function Button({children, onClick}) {
    return (
            <StyleButton onClick={onClick}>
                {children}
            </StyleButton>
    );
}

export default BotaoPadrao;