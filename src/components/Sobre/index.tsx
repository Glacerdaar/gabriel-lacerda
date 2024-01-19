import * as S from "./styles"
import minhaFoto from '../../assets/meGabriel.jpg'
import {Text, Title} from '../../styles/index'
const Sobre = () => (
    <S.Sobre id="sobre">
        <Title>Sobre</Title>
        <S.SobreContainer>
            <img src={minhaFoto} alt="Gabriel programando" />
            <Text>
                Sou um jovem desenvolvedor Front-end de 24 anos. Com um olhar focado no futuro, estou em busca constante de aprimorar minhas habilidades e criar experiências digitais incríveis. A cada linha de código, busco não apenas construir interfaces visualmente atraentes, mas também proporcionar uma navegação intuitiva e envolvente para os usuários. Estou comprometido em acompanhar as últimas tendências do desenvolvimento web, garantindo que meus projetos estejam sempre alinhados com as melhores práticas da indústria. Com uma mente curiosa e inovadora, estou ansioso para contribuir para o crescimento da tecnologia no Brasil e além, sempre empenhado em transformar ideias em realidade por meio do poder do código.
            </Text>
        </S.SobreContainer>
    </S.Sobre>
)

export default Sobre