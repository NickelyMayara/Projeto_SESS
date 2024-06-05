import styled from "styled-components"


const Cor = {
    RoxoClaro: "#E3E4F0",
    RoxoMedio: "#9594CD",
    RoxoMedio2: "#4B4E9F",
    RoxoEscuro: "#242666",
    Verde: "0FA943",
    White: "#ffffff"
}

export const Secao1 = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
`

export const ImgSecao1 = styled.img`
    border: 1px solid #9594CD;
    border-radius: 20px;
    max-width: 2000px;
    min-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Secao2 = styled.section`
    margin-bottom: 100px;
    background-color: ${Cor.RoxoMedio};
`

export const InfoSecao2 = styled.section`
    margin: 0px 100px;
    display: flex;
    justify-content: space-between;
    padding: 120px 0px;
    align-items: center;
`

export const TituloSecao2 = styled.h1`
    color: ${Cor.White};
    font-size: 30px;
`

export const ParagrafoSecao2 = styled.p`
    color: ${Cor.White};
    width: 700px;
`

export const TextosSecao2 = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
`

export const DivImgSecao2 = styled.div`
    height: 450px;
    width: 350px;
    background-color: ${Cor.White};
    border-radius: 20px;
`

export const TextoCalendario = styled.h3`
    font-family: Arial, Helvetica, sans-serif;
    color: ${Cor.RoxoEscuro};
    font-weight: 400;
    font-size: 15px;
    text-align: center;
`

export const Hr = styled.hr`
    margin: 10px;
`

export const Secao3 = styled.section`
    margin: 0px 150px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ImgSecao3 = styled.img`
    height: 480px;
    width: 500px;
`

export const DivSequencias = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Sequencia = styled.div`
    display: flex;
    align-items: center;
`

export const BlocoSequencia = styled.div`
    background-color: ${Cor.RoxoMedio2};
    width: 50px;
    height: 50px;
    border-radius: 15px;
`

export const TextoSequencia = styled.h3`
    font-size: 12px;
    font-family: 'Nunito Sans';
    width: 500px;
    margin-left: 30px;
    color: ${Cor.RoxoEscuro};
`