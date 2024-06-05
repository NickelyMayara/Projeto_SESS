import { Secao1, ImgSecao1, Secao2, InfoSecao2, TituloSecao2, ParagrafoSecao2, TextosSecao2, DivImgSecao2, TextoCalendario, Hr, Secao3, ImgSecao3, DivSequencias, Sequencia, BlocoSequencia, TextoSequencia } from '../Styles/Home'

import Img1 from '../../images/ImgPrincipal1.png'
import Img3 from '../../images/ImgSecao3.avif'

const Home = () => {
    return (
        <>
            <Secao1><ImgSecao1 src={Img1} alt='#'/></Secao1>
            <Secao2>
                <InfoSecao2>
                    <TextosSecao2>
                        <TituloSecao2>Suporte Escolar Sesi Senai (SESS)</TituloSecao2>
                        <ParagrafoSecao2>Um site dedicado a melhorar a comunicação entre alunos, professores e a diretoria escolar pode ser uma ferramenta valiosa para aprimorar o ambiente educacional.
                            
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets c
                            ontaining Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lo
                            rem Ipsum.</ParagrafoSecao2>
                    </TextosSecao2>
                    <DivImgSecao2>
                        <TextoCalendario>CALENDÁRIO<Hr></Hr></TextoCalendario>
                    </DivImgSecao2>
                </InfoSecao2>

            </Secao2>
            <Secao3>
                <ImgSecao3 src={Img3} alt='#' />
                <DivSequencias>
                    <Sequencia>
                        <BlocoSequencia></BlocoSequencia>
                        <TextoSequencia>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</TextoSequencia>
                    </Sequencia>
                    <Sequencia>
                        <BlocoSequencia></BlocoSequencia>
                        <TextoSequencia>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</TextoSequencia>
                    </Sequencia>
                    <Sequencia>
                        <BlocoSequencia></BlocoSequencia>
                        <TextoSequencia>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</TextoSequencia>
                    </Sequencia>
                </DivSequencias>

            </Secao3>
        </>
    )
}

export default Home;