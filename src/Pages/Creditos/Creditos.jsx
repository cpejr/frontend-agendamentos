import { 
    Container,
    Content,
    Titulos,
    TextoTitulo,
    Saldo,
    TextoSaldo,
    Extrato,
    BotaoCredito,
    Icone,
    Preco,
    ContentComprar,

}from "./Styles";

import { 
    Dollar,
    Coin,
    Coin2,
    MoneyBag

 } from "../../Assets";

 const creditos = [
    { id: 1, valor: 50, preco: 15, icone: Dollar},
    { id: 2, valor: 100, preco: 25, icone: Coin},
    { id: 3, valor: 200, preco: 50, icone: Coin2},
    { id: 4, valor: 500, preco: 100, icone: MoneyBag}
];


function Creditos (){

    
return(
    <Container>
        <Content>
            <Titulos>
                <TextoTitulo>Meus Créditos</TextoTitulo>
            </Titulos>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "12px"}}>
                <Saldo>
                    <p style={{color: "#063D61", fontSize: "28px"}}>Saldo Disponível</p>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "8px"}}>
                        <img src={Dollar} alt="" />
                        <TextoSaldo>9999</TextoSaldo>
                    </div>
                </Saldo>
                <Extrato href="/" >Ver Extrato &gt;</Extrato>
            </div>
            <Titulos style={{width: "460px"}}>
                <TextoTitulo>Comprar Créditos</TextoTitulo>
            </Titulos>
            <ContentComprar>
                {creditos.map((credito) => (
                        <BotaoCredito key={credito.id}>
                            <img src={credito.icone} alt={`Ícone de ${credito.valor} créditos`} width="100px" height="100px" />
                            <TextoSaldo>{credito.valor} Créditos</TextoSaldo>
                            <Preco>R$ {credito.preco}</Preco>
                        </BotaoCredito>
                ))}
            </ContentComprar>
        </Content>
    </Container>
)
}

export default Creditos;