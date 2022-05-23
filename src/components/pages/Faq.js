import React from 'react'

import '../styles/Faq.css'

import logoWoman from '../../logos/logo-woman.png'

const Faq = () => {
  return (
    <div>
      <div className="container faq-container">
        <h1 className="title-principal">6 Principais dúvidas sobre os ensaios</h1>

        <ol>
          <li>
            <h2 className="title-secundary">Local</h2>
            <ul className="text-alt">
              <li>Será um ensaio interno?</li>
              <li>Será um ensaio externo?</li>
            </ul>
            <p className="text-principal">
              A localizção é o primeiro ponto a ser pensado para definirmos
              assim o que voce quer transmitir com esse ensaio.
            </p>
          </li>
          <li>
            <h2 className="title-secundary">Que roupa usar?</h2>
            <ul className="text-alt">
              <li>O estilo deve ser levado em consideração;</li>
              <li>Que mensagem quer passar com o seu look?</li>
              <li>Também leve em consideração o local do ensaio.</li>
            </ul>
            <p className="text-principal">
              Alguns pacotes incluem roupas e acessórios do acervo, mas de
              qualquer forma estarei te auxiliando com inspirações de looks para
              tornar a escolha mais tranquila.
            </p>
          </li>
          <li>
            <h2 className="title-secundary">Objetos e acessórios</h2>
            <ul className="text-alt">
              <li>
                Itens que se comuniquem com o cenário são a chave mágica nessa
                hora;
              </li>
              <li>Chapéis, luzes de led, seu livro preferido, caneca...</li>
              <li>Lembre das coisas que têm valor emocional para você.</li>
            </ul>
            <p className="text-principal">
              Dica: Pense em objetos que ajudariam a contar uma hitória naquele
              local. Como por exempro: Um livro, frutas e uma canga para um
              ensaio na Práia.
            </p>
          </li>
          <li>
            <h2 className="title-secundary">Posso levar alguém?</h2>
            <ul className="text-alt">
              <li>Claro que sim! Essa pessoa nos ajudará durante o ensaio.</li>
              <li>Você se sentiria confortável posando na frente dela?</li>
            </ul>
            <p className="text-principal">
              Vale parentes, amigo e até namorado. Contando que você se sinta à
              vontade na frente daquela pessoa.
            </p>
          </li>
          <li>
            <h2 className="title-secundary">Horários das fotos</h2>
            <ul className="text-alt">
              <li>O ensaio dura em média 1h à 2:30h;</li>
              <li>Combine com o motorista o horário de ida e de volta;</li>
              <li>Precisamos chegar com 30mins ou mais de antecedencia.</li>
            </ul>
            <p className="text-principal">
              O tempo é nosso maior aliado na hora de fotografar. Não podemos
              correr contra ele e tornar a experiência desagradável. Precisamos
              deixar você e a câmera habituadas.
            </p>
          </li>
          <li>
            <h2 className="title-secundary">Quais poses fazer?</h2>
            <ul className="text-alt">
              <li>Não se preocupe com isso.</li>
              <li>
                Teremos conversas sinceras antes do dia especial para eu saber
                como você se sente mais bonita.
              </li>
              <li>
                O ensaio flui naturalmente. Não deixarei você ficar congelada.
                Relaxa!
              </li>
            </ul>{' '}
            <p className="text-principal">
              As poses montadas deixaram a modelo travada. Quanto mais à vontade
              você ficar, mais natural serão as fotos.
            </p>
          </li>
        </ol>
        <div className="container-logo-bottom">
          <img className="logo-bottom" src={logoWoman} alt="Logo Mulher" />
        </div>
      </div>
    </div>
  )
}

export default Faq
