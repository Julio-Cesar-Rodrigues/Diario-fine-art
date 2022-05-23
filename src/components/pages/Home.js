import React, { useState } from 'react'
import { SliderData } from '../SliderData'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import '../styles/Home.css'

import testemonials1 from '../../images/testemonials1.jpg'
import testemonials2 from '../../images/testemonials2.jpg'
import testemonials3 from '../../images/testemonials.3.jpg'

import imgSobre from '../../images/imgSobre.jpg'
import imgSobre2 from '../../images/imgSobre-2.jpg'

import logo from '../../logos/arvore.png'

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div>
      <div className="container">
        <section className="slider">
          <FaAngleLeft className="left-arrow" onClick={prevSlide} />
          <FaAngleRight className="right-arrow" onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt="carousel" className="image" />
                )}
              </div>
            )
          })}
        </section>
      </div>

      <div>
        <section className="container goals">
          <div className="text-container">
            <h2 className="title-principal">Objetivo</h2>
            <div className="p-container">
              <p className="text-principal">
                A nova marca de Diario Fine Art tem como objetivo comunicar sua
                arte para o publico alvo, mulheres de 14 a 45 anos para ensaios
                solo ou com a família.
              </p>
              <p className="text-principal">
                A simbologia aprensantada pela árvore da vida e a figura
                feminina, representam a vida, a feminilidade , a beleza, o
                autruismo e a renovação.
              </p>
            </div>
            <div className="img-container-box">
              <img className="img-principal img-1" src={imgSobre} alt="" />
            </div>
          </div>

          <div className="text-container">
            <div className="img-container-box">
              <img className="img-principal img-1" src={imgSobre2} alt="" />
            </div>
            <div className="p-container">
              <p className="text-principal">
                O meu objetivo é com o feminino. Quero ajudar mulheres a
                descobrir sua essência natural.
              </p>
              <p className="text-principal">Me fazer presente na vida delas:</p>
              <p className="text-principal">
                Registrando momentos especiais e transformando em arte.
              </p>
            </div>
          </div>
        </section>

        <section className="mission-container parallax-container">
          <div className="parallax-words-box">
            <div className="parallax-text-container">
              <h2 className="title-principal title-card">Palavras Chave</h2>
              <p className="text-principal">
                Perseverança, resiliência, inovação, feminismo, autruísmo, foram
                algumas das palavras chave usadas como fonte de inspiração para
                a identidade visual bem como as referências visuais
                apresentadas.
              </p>
            </div>
          </div>
        </section>

        <section className="grid-container container">
          <div className="grid-item">
            <img className="img-testemonial" src={testemonials1} alt="" />
            <p className="testemonials-text text-principal">
              Mari parabéns pelo seu trabalho incrível, simpatia e carinho. Amei
              poder fazer parte desse momento especial para a princesa Clarissa.
              Estou apaixonada e encantada com cada clique, pois todos eles
              mostram a emoção e o sentimento capturados em forma de imagem.
              Muito obrigada e muito sucesso.
            </p>
          </div>
          <div className="grid-item">
            <img className="img-testemonial " src={testemonials2} alt="" />
            <p className="testemonials-text text-principal">
              Amo tanto esse carinho que você tem pelos clientessss, nunca perca
              essa essência Mari. Você é dms ♡.
            </p>
          </div>
          <div className="grid-item">
            <img className="img-testemonial" src={testemonials3} alt="" />
            <p className="testemonials-text text-principal">
              Mari por mais que eu tente não consigo explicar a gratidão que eu
              tenho pelo seu trabalho ♡. Que Deus te abençoe e que vc continue
              levando pessoas, realçando belezas e eternizando momentos.
            </p>
          </div>
        </section>

        <div className="shy-container parallax-container">
          <div className="parallax-words-box">
            <div className="parallax-text-container">
              <h2 className="title-principal title-card">Voçê é incrível</h2>
              <p className="text-principal">
                Tímido com câmeras? Sem problemas. Conhecemos nossos clientes
                como humanos, para que você possa se sentir confiante,
                se divertir e mostrar essa vibração atemporal de vocês.
                Não é necessário rigidez, sorrisos forçados ou comportamento de
                modelo.
              </p>
            </div>
          </div>
        </div>

        <div className="img-logo-container container">
          <div className="logo-container">
            <img src={logo} className="img-logo" alt="logo-imagem" />
          </div>
          <p className="text-principal">
            Toda a proposta da nova marca e identidade visual de Diário Fine Art
            foi desenvolvida pela Pipa de Giz no método handmade inspirado na
            essência de boho chic e do vintage, aliando elegância e
            sofisticação.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
