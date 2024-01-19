import heroIlustration from '../../assets/heroImg.png'
import * as S from './styles'

const Hero = () => (
    <S.Hero>
        <S.TextHero>
            <p>Olá, eu sou o</p>
            <h3>Gabriel <span>Lacerda</span></h3>
            <p>um desenvolvedor Front-end</p>
            <S.LinkHero>
                <S.HeroLinks href="" download="../../assets/GabrielLacerda-CV.pdf">Download CV</S.HeroLinks>
                <S.HeroLinks href="">Linkedin</S.HeroLinks>
            </S.LinkHero>
        </S.TextHero>
            <aside>
                <S.HeroImg src={heroIlustration} alt="Ilustração de um desenvolvedor front-end" />
            </aside>
    </S.Hero>
)

export default Hero