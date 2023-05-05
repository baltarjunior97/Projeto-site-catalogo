import React from 'react';

import { FaAt, FaWhatsapp, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { Div } from './styled';

export default function Contato() {
  return (
    <Div>
      <h1>Entre em contato</h1>
      <h4>Quer anunciar seu carro comigo?</h4>
      <p>Entre em contato pelos links abaixos e vamos conversar!</p>
      <div className="contact whatsapp">
        <div>
          <a
            href="https://wa.me/+5521964458962?text=Vim%20pelo%20site"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={35} />
          </a>
        </div>
        <div className="contact-text">
          <p>Fale comigo por WhatsApp!</p>
          <a
            href="https://wa.me/+5521964458962?text=Vim%20pelo%20site"
            target="_blank"
            rel="noreferrer"
          >
            <h4>(21) 96445-8962</h4>
          </a>
        </div>
      </div>
      <div className="contact facebook">
        <div>
          <a
            href="https://facebook.com/fabio.oguanobaltar"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={33} />
          </a>
        </div>
        <div className="contact-text">
          <p>Fale comigo pelo Facebook no link:</p>
          <a
            href="https://facebook.com/fabio.oguanobaltar"
            target="_blank"
            rel="noreferrer"
          >
            <h4>fb.com/fabio.oguanobaltar</h4>
          </a>
        </div>
      </div>
      <div className="contact phone">
        <div>
          <FaPhoneAlt size={30} />
        </div>
        <div className="contact-text">
          <p>Fale comigo por telefone</p>
          <h4>(21) 96445-8962</h4>
        </div>
      </div>
      <div className="contact email">
        <div>
          <a
            href="mailto:fabiooguano@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaAt size={30} />
          </a>
        </div>
        <div className="contact-text">
          <p>Fale comigo por e-mail no endereço:</p>
          <a
            href="mailto:fabiooguano@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <h4>fabiooguano@hotmail.com</h4>
          </a>
        </div>
      </div>
    </Div>
  );
}
