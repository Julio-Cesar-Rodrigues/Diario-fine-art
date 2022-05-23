import React from 'react'
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './styles/Footer.css'
import mariana from '../images/mari.jpg'
import dfa from '../logos/dfa-marrom.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons-container">
        <h2 className="title-principal">Me enconte em</h2>
        <div className="icons">
          <a
            rel="noopener"
            className="icons-footer"
            href="https://www.facebook.com/diariofineart"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a
            rel="noopener"
            className="icons-footer"
            href="https://www.instagram.com/diariofineart/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            rel="noopener"
            className="icons-footer"
            href="https://wa.me/message/UW2HMKTBJDLPD1"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="photo-footer">
        <a
          rel="noopener"
          href="https://www.instagram.com/moncoress/"
          target="_blank"
        >
          <img className="mariana-photo" src={`${mariana}`} alt="Mariana" />
        </a>
      </div>
      <img className="dfa-logo" src={dfa} alt="dfa" />
    </footer>
  )
}
