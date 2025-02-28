import { StyleBotaoEntrar } from "./Styles";

function BotaoEntrar({children, onClick}) {
    return (
            <StyleBotaoEntrar onClick={onClick}>
                {children}
            </StyleBotaoEntrar>
    );
}

export default BotaoEntrar;