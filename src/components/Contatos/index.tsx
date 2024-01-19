import Gmail from "../../assets/ContatosImg/gmail.svg"
import Whatsapp from "../../assets/ContatosImg/whatsapp.svg"
import Linkedin from"../../assets/ContatosImg/linkedin.svg"
import * as S from "./styles"

const Contatos = () => {
    return (

       <S.Contato id="contato">
                <S.Title>Contatos</S.Title>
                <S.ContatosList>
                    <S.ContatosItem>
                        <S.ContatosImg href="">
                            <S.ContatoImg src={Gmail} alt="" />
                        </S.ContatosImg>
                    </S.ContatosItem>

                    <S.ContatosItem>
                        <S.ContatosImg href="">
                            <S.ContatoImg src={Whatsapp} alt="" />
                        </S.ContatosImg>
                    </S.ContatosItem>

                    <S.ContatosItem>
                        <S.ContatosImg href="">
                            <S.ContatoImg src={Linkedin} alt="" />
                        </S.ContatosImg>
                    </S.ContatosItem>
                </S.ContatosList>
       </S.Contato>


        
    )
}

export default Contatos