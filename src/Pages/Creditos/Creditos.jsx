import { 
    Container,
    Content,
    Titles,
    TextTitle,
    Balance,
    TextBalance,
    Statement,
    ButtonCredit,
    Icon,
    Price,
    TextBuy,
    ContentBuy,

}from "./Styles";

import { 
    Dollar,
    Coin,
    Coin2,
    MoneyBag

 } from "../../Assets";

 const creditos = [
    { id: 1, valor: 50, price: 15, icon: Dollar},
    { id: 2, valor: 100, price: 25, icon: Coin},
    { id: 3, valor: 200, price: 50, icon: Coin2},
    { id: 4, valor: 500, price: 100, icon: MoneyBag}
];


function Creditos (){

    
return(
    <Container>
            <Content>
                <Titles>
                    <TextTitle>Meus Créditos</TextTitle>
                </Titles>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "12px"}}>
                    <Balance>
                        <p style={{color: "#063D61", fontSize: "28px"}}>Saldo Disponível</p>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "8px"}}>
                            <img src={Dollar} alt="" />
                            <TextBalance>9999</TextBalance>
                        </div>
                    </Balance>
                    <Statement onClick={() => navigate("/")}>Ver Extrato &gt;</Statement>
                </div>
                <Titles>
                    <TextTitle>Comprar Créditos</TextTitle>
                </Titles>
                <ContentBuy>
                    {creditos.map((credito) => (
                        <ButtonCredit key={credito.id}>
                            <Icon src={credito.icon} alt={`Ícone de ${credito.valor} créditos`} width="100px" height="100px" />
                            <TextBuy>{credito.valor} Créditos</TextBuy>
                            <Price>R$ {credito.price}</Price>
                        </ButtonCredit>
                    ))}
                </ContentBuy>
            </Content>
        </Container>
)
}

export default Creditos;