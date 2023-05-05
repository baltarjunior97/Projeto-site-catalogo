import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

import { FaWhatsapp } from 'react-icons/fa';
import { Container, ContainerCarousel } from './styled';
import Loading from '../../components/Loading';
import carPlaceholder from '../../config/images/carPlaceholder.png';

import axios from '../../services/axios';

export default function Home() {
  // set estado variaveis
  const [carros, setCarros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // executa quando pagina montar
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get('/cars');
        setCarros(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log('erro');
        setIsLoading(false);
      }
    }
    getData();

    // a cara intervalo executa o click no botao (efeito carousel auto slider )
    setInterval(() => {
      document.querySelector('.arrow-right').click();
    }, 3500);
  }, []);

  // controle click carrosel

  let currentItem = 0;
  const items = document.querySelectorAll('.item'); // seleciona cards
  const maxItems = items.length;

  const handleClick = (e) => {
    const isLeft = e.target.classList.contains('arrow-left'); // checa qual arrow foi clicada

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    // carousel loop
    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove('current-item'));

    items[currentItem].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });

    items[currentItem].classList.add('current-item');
  };

  const handleCarroModelo = (nome) => {
    return nome.toUpperCase();
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Precisando de um veículo?</h1>
      <div className="home-catalago">
        <p>
          Achou o lugar certo! Dê uma olhada no nosso catálogo e encontre o
          carro dos seus sonhos!
        </p>

        <ContainerCarousel>
          <div className="container">
            <button
              onClick={handleClick}
              type="button"
              className="arrow-left control"
              aria-label="Previous image"
            >
              {'<'}
            </button>
            <button
              onClick={handleClick}
              type="button"
              className="arrow-right control"
              aria-label="Next Image"
            >
              {'>'}
            </button>
            <div className="gallery-wrapper">
              <div className="gallery">
                {carros.map((carro, index) => (
                  <div
                    className={
                      index === 0
                        ? 'item current-item veiculos-cards'
                        : 'item veiculos-cards'
                    }
                    key={String(carro.id)}
                  >
                    <div className="veiculos-cards-title">
                      <h4>{handleCarroModelo(carro.modelo)}</h4>
                    </div>
                    <div className="veiculos-cards-img">
                      {get(carro, 'Photos[0].url', '') ? (
                        <img crossOrigin="" src={carro.Photos[0].url} alt="" />
                      ) : (
                        <img src={carPlaceholder} alt="" />
                      )}
                    </div>
                    <div className="veiculos-cards-info">
                      <p>{`Ano: ${carro.ano}`}</p>
                      <p>{`KM: ${carro.km} km`}</p>
                      <Link to={`/veiculo/${carro.id}`}>
                        <button type="button">+ Informações</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerCarousel>
        <Link to="/veiculos">
          <div className="botao-catalogo">
            <h4>Veja o catalogo completo</h4>
          </div>
        </Link>
      </div>
      <h1>Quer anunciar seu veículo?</h1>
      <div className="home-contato">
        <div className="home-contato-texto">
          <p>Entre em contato comigo e vamos conversar!</p>
        </div>
        <div className="home-contato-wpp">
          <div className="home-contato-wpp-logo">
            <a
              href="https://wa.me/+5521964458962?text=Vim%20pelo%20site"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={45} />
            </a>
          </div>
          <div className="home-contato-wpp-txt">
            <a
              href="https://wa.me/+5521964458962?text=Vim%20pelo%20site"
              target="_blank"
              rel="noreferrer"
            >
              <p>Fabio Baltar</p>
              <p className="numero">(21) 96445-8962</p>
            </a>

            <Link className="wpp-botao-contato" to="/contato">
              <p>Outras formas de contato</p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
