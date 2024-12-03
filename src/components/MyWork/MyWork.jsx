import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './MyWork.css';

// IMAGES
import allboro from '../../../public/assets/allboro.png';
import urblotSimulacao from '../../../public/assets/urblot-simulacao.png';
import cdcap from '../../../public/assets/cdcap.png';

const MyWork = () => {
  const { language } = useLanguage();
  const translate = (textEn, textPt) => (language === 'en' ? textEn : textPt);

  return (
    <section id="my-work" className="my-work">
      <hgroup>
        <h2>{translate('My Work', 'Meu Trabalho')}</h2>
      </hgroup>

      <div>
        <dl>
          <hgroup>
            <dt>{translate('AllBoro Tours', 'AllBoro Tours')}</dt>
          </hgroup>

          <dd>
            {translate(
              '',
              'Durante meu tempo na FastPlay, trabalhei exclusivamente no desenvolvimento deste aplicativo de turismo para um cliente de Nova York. Construído em React Native, o app foi projetado para oferecer uma experiência completa aos turistas em Manhattan. Os usuários podiam acompanhar em tempo real a localização de um ônibus hop-on-hop-off, comprar passes diários diretamente no aplicativo e descer nos pontos turísticos desejados. O app também incluía um guia virtual e localização interativa para tornar a experiência ainda mais imersiva. Além disso, contribuí para o desenvolvimento do site do projeto, que também foi feito em React, permitindo aos usuários acessar informações e funcionalidades complementares',
            )}
          </dd>
          <NavLink to="/allboro">Saiba Mais</NavLink>
        </dl>
        <img className="mockup-mobile" src={allboro} alt="allboro" />
      </div>

      <div>
        <dl>
          <hgroup>
            <dt>{translate('URBLOT', 'URBLOT')}</dt>
            <a href="https://www.urblot.com.br" target="blank">
              urblot.com.br
            </a>
          </hgroup>

          <dd>
            {translate(
              '',
              'Atualmente faço parte da URBLOT, um projeto inovador para de venda de lotes. O site, desenvolvido em React, conecta loteadoras com clientes finais, permitindo que os usuários visualizem empreendimentos por meio de uma masterplan interativa. A plataforma possibilita desde a simulação de pagamento dos lotes selecionados até o agendamento de visitas aos empreendimentos. Além disso, os clientes podem concluir todo o processo de compra diretamente pelo site, criando uma experiência completa e prática para o usuário final.',
            )}
          </dd>

          <NavLink to="/urblot">Saiba Mais</NavLink>
        </dl>
        <img
          className="mockup-mobile"
          src={urblotSimulacao}
          alt="urblot-simulacao"
        />
      </div>

      <div>
        <dl>
          <hgroup>
            <dt>{translate('CD Capital', 'CD Capital')}</dt>
            <a href="https://www.cdcap.com.br" target="blank">
              cdcap.com.br
            </a>
          </hgroup>

          <dd>
            {translate(
              '',
              'Fui responsável pelo desenvolvimento de uma landing page para uma empresa de empréstimos voltada a pessoas jurídicas. O projeto tinha como objetivo apresentar de forma clara e atrativa os serviços oferecidos pela empresa, com foco em design responsivo e otimização para captação de leads.',
            )}
          </dd>

          <NavLink to="/cdcap">Saiba Mais</NavLink>
        </dl>
        <img className="mockup-web" src={cdcap} alt="cdcap" />
      </div>
    </section>
  );
};

export default MyWork;
