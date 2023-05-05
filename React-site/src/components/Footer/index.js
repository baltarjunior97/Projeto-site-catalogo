import React from 'react';
import { Link } from 'react-router-dom';

import { FaWhatsapp, FaFacebookF, FaAt } from 'react-icons/fa';
import banner2 from '../../config/images/banner2.png';
import { Div } from './styled';

export default function Footer() {
  return (
    <Div>
      <div className="footer-logo">
        <Link to="/">
          <img src={banner2} alt="footer logo" />
        </Link>
      </div>
      <div className="footer-trademark">
        <p>Número para contato:</p>
        <h4>(21)96445-8962</h4>
        <p>© 2023 Baltar Intermédios</p>
      </div>
      <div className="footer-socials">
        <Link to="/contato">
          <h4>Contatos</h4>
        </Link>
        <ul>
          <li>
            <a
              href="https://wa.me/+5521964458962?text=Vim%20pelo%20site"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={12} />
              <span> 21 964458962</span>
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/fabio.oguanobaltar"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={12} />
              <span>/fabio.oguanobaltar</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:fabiooguano@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaAt size={12} />
              <span className="email-span"> fabiooguano</span>
            </a>
          </li>
        </ul>
      </div>
    </Div>
  );
}
