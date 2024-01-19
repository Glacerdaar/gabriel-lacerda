import { useState } from 'react';

import HTML from "../../assets/ImgSkills/html.svg"
import CSS from "../../assets/ImgSkills/css.svg"
import Javascript from "../../assets/ImgSkills/javascript.svg"
import Bootstrap from "../../assets/ImgSkills/bootstrap.svg"
import Sass from "../../assets/ImgSkills/sass.svg"
import React from "../../assets/ImgSkills/react.svg";
import Styled from "../../assets/ImgSkills/styled-components.svg"
import Typescript from "../../assets/ImgSkills/typescript.svg"

import * as S from './styles';
import {Text, Title} from '../../styles/index'

type ImageKeys = 'HTML' | 'CSS' | 'Javascript' | 'Bootstrap' | 'Gulp' | 'Less' | 'Sass' | 'Grunt' | 'React' | 'Styled' | 'Typescript';

const Skill = () => {
  const [highlightedSkill, setHighlightedSkill] = useState<ImageKeys | null>(null);

  const skillMessages: Record<ImageKeys, string> = {
    HTML: 'HTML, que significa HyperText Markup Language, é como o esqueleto da web. Imagine-o como a estrutura de uma casa. Com suas tags, o HTML marca e organiza os elementos, definindo quem é o quê numa página. Ele é fundamental para criar a base sobre a qual as informações são exibidas, tornando a web funcional e estruturada.',
    CSS: 'CSS, ou Cascading Style Sheets, é o estilista digital. Quando o HTML fornece a estrutura, o CSS entra em cena para dar estilo à página. Cores, fontes, layouts - tudo está sob seu comando. É a maquiagem que transforma a web em algo visualmente atraente e coeso.',
    Javascript: 'JavaScript é como o artista que dá vida ao palco web. Esta linguagem de programação dinâmica permite que elementos interajam e se movam na página. Responsável por tornar as páginas web mais do que apenas estáticas, o JavaScript adiciona dinamismo, tornando a experiência do usuário mais envolvente.',
    Bootstrap: 'Bootstrap é como um arquiteto que já desenhou o esboço da casa. É um framework front-end que oferece uma variedade de componentes pré-construídos e um sistema de grid flexível. Com Bootstrap, desenvolvedores podem construir interfaces responsivas e elegantes de forma rápida, economizando tempo e esforço.',
    Gulp: 'Gulp é como um assistente pessoal eficiente para desenvolvedores web. Esta ferramenta de automação de tarefas simplifica processos, como minificação de arquivos e recarregamento automático de páginas. Com Gulp, o desenvolvedor economiza tempo e energia, concentrando-se no que realmente importa.',
    Less: 'Less é como o primo mais esperto do CSS. Esta linguagem de estilo dinâmica estende as capacidades do CSS, introduzindo variáveis, funções e aninhamento. Com Less, a escrita e manutenção de estilos se tornam mais intuitivas, proporcionando uma estilização mais eficiente.',
    Sass: 'SASS, ou Syntactically Awesome Stylesheets, é como o estilista inovador do mundo web. Estendendo as funcionalidades do CSS, SASS traz recursos poderosos como variáveis, aninhamento e mixins. Ele oferece uma abordagem modular para a estilização, tornando o desenvolvimento de estilos mais flexível e avançado.',
    Grunt: 'Grunt é como o operário incansável da automação. Esta ferramenta de automação de tarefas simplifica processos repetitivos, como minificação de arquivos e execução de testes. Grunt é o aliado que mantém o ritmo constante do desenvolvimento, garantindo eficiência e consistência.',
    React: 'React é como o mestre da construção de interfaces modernas. Esta biblioteca JavaScript revoluciona a criação de aplicações web ao utilizar componentes reutilizáveis. Com React, desenvolvedores podem construir interfaces interativas e responsivas de maneira eficaz e eficiente',
    Styled: 'Styled-components é como ter um estilista integrado ao código. Esta biblioteca para React permite que estilos sejam definidos diretamente nos componentes, garantindo uma abordagem modular e coesa. Com styled-components, a estilização dos elementos se torna mais intuitiva e organizada.',
    Typescript: 'TypeScript é como o guardião do código. Adicionando recursos de tipagem estática ao JavaScript, TypeScript ajuda a evitar erros durante o desenvolvimento. É como ter um escudo protetor para o código, garantindo maior confiabilidade e manutenção em projetos web.'
  };

  return (

    <S.Skill id='conhecimentos'>
      <Title>Conhecimentos</Title>
      <S.SkillContainer>
          <Text>
            {highlightedSkill
              ? skillMessages[highlightedSkill]
              : '*Passe o cursor do mouse no card para visualizar o conteúdo ou clique na imagem se estiver usando um celular/tablet.'}
          </Text>
          <S.CardContainer>
            <S.SkillCard
              onMouseEnter={() => setHighlightedSkill('HTML')}
              onMouseLeave={() => setHighlightedSkill(null)}
            >
              <S.SkillCardImage
                src={HTML}
                alt="HTML logo"
              />
            </S.SkillCard>

            <S.SkillCard
              onMouseEnter={() => setHighlightedSkill('CSS')}
              onMouseLeave={() => setHighlightedSkill(null)}
            >
              <S.SkillCardImage
                src={CSS}
                alt="CSS logo"
              />
            </S.SkillCard>

            <S.SkillCard
              onMouseEnter={() => setHighlightedSkill('Javascript')}
              onMouseLeave={() => setHighlightedSkill(null)}
            >
              <S.SkillCardImage
                src={Javascript}
                alt="Javascript logo"
              />
            </S.SkillCard>

            <S.SkillCard
              onMouseEnter={() => setHighlightedSkill('Bootstrap')}
              onMouseLeave={() => setHighlightedSkill(null)}
            >
              <S.SkillCardImage
                src={Bootstrap}
                alt="Bootstrap logo"
              />
            </S.SkillCard>

            <S.SkillCard
              onMouseEnter={() => setHighlightedSkill('Sass')}
              onMouseLeave={() => setHighlightedSkill(null)}
            >
              <S.SkillCardImage
                src={Sass}
                alt="Sass logo"
              />
            </S.SkillCard>

            <S.SkillCard
              onMouseEnter={() => setHighlightedSkill('Styled')}
              onMouseLeave={() => setHighlightedSkill(null)}
            >
              <S.SkillCardImage
                src={Styled}
                alt="Styled-components logo"
              />
            </S.SkillCard>

            <S.SkillCard
              onMouseEnter={() => setHighlightedSkill('React')}
              onMouseLeave={() => setHighlightedSkill(null)}
            >
              <S.SkillCardImage
                src={React}
                alt="React logo"
              />
            </S.SkillCard>

            <S.SkillCard
              onMouseEnter={() => setHighlightedSkill('Typescript')}
              onMouseLeave={() => setHighlightedSkill(null)}
            >
              <S.SkillCardImage
                src={Typescript}
                alt="Typescript logo"
              />
            </S.SkillCard>
            
          </S.CardContainer>
      </S.SkillContainer>
    </S.Skill>
  );
};

export default Skill;