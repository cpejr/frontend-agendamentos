import {BlueRectangle, Logo, Contato} from "./Styles";
import { figmafooter } from "../../Assets";

export default function Footer() {
    return <BlueRectangle>
        <Logo  src = {figmafooter} alt="Logo" />
        <Contato>
            figma@gmail.com
            (31)99999-9999
        </Contato>
    </BlueRectangle>;
}