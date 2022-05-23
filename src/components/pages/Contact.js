import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaRegPaperPlane
} from 'react-icons/fa'

import logo from '../../logos/arvore-circular.png'

import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className="contact-page container">
      <h1 className="title-principal">
        Me enconte e entre em contato comigo por:
      </h1>
      <div className="link-contact-div">
        <h2 className="title-secundary">E-mail</h2>

        <a
          className="link-contact"
          href="mailto:mkt.marianamoncores@gmail.com"
          target="_blank"
        >
          <FaRegPaperPlane />
          mkt.marianamoncores@gmail.com
        </a>
      </div>

      <div className="link-contact-div">
        <h2 className="title-secundary">Telefone</h2>
        <a
          className="link-contact"
          href="https://wa.me/message/UW2HMKTBJDLPD1"
          target="_blank"
        >
          <FaWhatsapp />
          +55 21 99893-3778
        </a>
      </div>

      <div className="link-contact-div">
        <h2 className="title-secundary">Instagram Portifólio</h2>
        <a
          className="link-contact"
          href="https://www.instagram.com/diariofineart/"
          target="_blank"
        >
          <FaInstagram />
          @diariofineart
        </a>
      </div>

      <div className="link-contact-div">
        <h2 className="title-secundary">Instagram Pessoal</h2>

        <a
          className="link-contact"
          href="https://www.instagram.com/moncoress/"
          target="_blank"
        >
          <FaInstagram />
          @moncoess
        </a>
      </div>

      <div className="link-contact-div">
        <h2 className="title-secundary">Facebook</h2>
        <a
          className="link-contact"
          href="https://www.facebook.com/diariofineart"
          target="_blank"
        >
          <FaFacebookSquare /> Diário Fine Art - Mariana Monçôres
        </a>
      </div>

      <div>
        <h2 className="text-principal">Faria Lemos, Minas Gerais</h2>
      </div>
      <div>
        <h2 className="text-principal">Pavuna, Rio de Janeiro</h2>
      </div>
      <div className="container-logo-bottom"></div>
      <img className="logo-bottom" src={logo} alt="logo-circular" />
    </div>
  )
}

export default Contact
