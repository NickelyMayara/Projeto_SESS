import { Link } from "react-router-dom"
import facebook from '../../images/facebook_icon.png'
import x from '../../images/x_icon.png'
import instagram from '../../images/instagram_icon.png'

import { Footer, Links, Span, Linha, TextoLinha, LinkRedesSociais, RedesSociais, IconFacebook, IconX, IconInstagram } from '../Styles/Rodape'

const Rodape = () => {
    return (
        <>
            <Footer>
                <Links>
                    <Link className="linkFooter" to='/'> Home</Link>
                    <Span>•</Span>
                    <Link className="linkFooter" to='agendamentos'> Agendamentos</Link>
                    <Span>•</Span>
                    <Link className="linkFooter" to='feedbacks'> Feedbacks</Link>
                </Links>
                <RedesSociais>
                    <LinkRedesSociais><IconFacebook src={facebook} alt="#" /></LinkRedesSociais>

                    <LinkRedesSociais><IconX src={x} alt="#" /></LinkRedesSociais>  

                    <LinkRedesSociais><IconInstagram src={instagram} alt="#" /></LinkRedesSociais>  
                </RedesSociais>

            </Footer >
            <Linha><TextoLinha>&copy; Copyright 2024</TextoLinha></Linha>
        </>
    )
}

export default Rodape;