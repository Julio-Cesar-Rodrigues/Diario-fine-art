import React from 'react'
import './styles/Testimony.css'
import testemonials1 from '../images/testemonials1.jpg'
import testemonials2 from '../images/testemonials2.jpg'
import testemonials3 from '../images/testemonials.3.jpg'

export const Testimony = () => {
  return (
    <div className="grid-container container-1">
      <div className="grid-item">
        <img className="img-testemonial" src={testemonials1} alt="" />
        <p className="testemonials-text text-principal">
          Mari parabéns pelo seu trabalho incrível, simpatia e carinho. Amei
          poder fazer parte desse momento especial para a princesa Clarissa.
          Estou apaionada e encantada com cada clique, pois todos eles mostram a
          emoção e o sentimento capturados em forma de imagem. Muito obrigada e
          muito sucesso.
        </p>
      </div>
      <div className="grid-item">
        <img className="img-testemonial " src={testemonials2} alt="" />
        <p className="testemonials-text text-principal">
          Amo tanto esse carinho que você tem pelos cllientessss, nuca perca
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
    </div>
  )
}
