import styled from "styled-components"

// import {divisao} from '../../images/divisao.webp'

const Cor = {
    AzulMarinho: "#042940",
    AzulVerde: "#075F73",
    AzulClaro: "#A0CED9",
    White: "#000"
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Cor.AzulMarinho};
    margin: 0;
    padding: 0;
`

export const ContainerTextos = styled.div`
    padding: 150px 300px 0px 300px;
`

export const Titulo1 = styled.h1`
    margin: 0;
    margin-bottom: 30px;
    color: white;
    font-family: cursive, 'Times New Roman', Times, serif;
`

export const Texto = styled.p`
    margin: 0;
    padding: 0;
    color: white;
    font-family: "Nunito Sans", sans-serif;
    font-size: 15px;
    line-height: 30px;
    font-weight: 600;
    text-align: justify;
`

export const ImgDivisao = styled.div`
    height:100px;
    padding: 30px 270px 30px;
    background-image: url(divisao);
    background-repeat: no-repeat;
    background-size: cover;
`

export const SecaoInfo = styled.section`
    display: flex;
    flex-direction: column;
    height: 600px;
`

export const Info1 = styled.div`
    background-color: ${Cor.AzulClaro};
    display: flex;
`

export const Info2 = styled.div`

`

export const ContainerTextosInfo = styled.div`

`

export const TituloAnimal = styled.div`

`

export const Img = styled.img`
    width: 50px;
    height: 50px;
`
export const TextoInfo = styled.p`

`