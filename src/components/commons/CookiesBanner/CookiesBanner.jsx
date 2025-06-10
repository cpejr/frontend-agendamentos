import PropTypes from "prop-types";
import { BannerContainer, Text, AcceptButton } from "./styles";

export default function CookieBanner({ onAccept }) {
    return (
        <BannerContainer>
            <Text>
                Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com o uso de cookies.
            </Text>
            <AcceptButton onClick={onAccept}>
                Aceitar
            </AcceptButton>
        </BannerContainer>
    );
}

CookieBanner.propTypes = {
    onAccept: PropTypes.func.isRequired,
};
