import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Container, ContainerInfo, ContainerCarousel, Viewing } from './styled';
import carPlaceholder from '../../config/images/carPlaceholder.png';

import axios from '../../services/axios';
import history from '../../services/history';
import Loading from '../../components/Loading';

export default function Veiculo({ match }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // verifica se usuario está logado
  const id = get(match, 'params.id', 0); // pega id dos parametros da pagina

  // seta valores variaveis
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [km, setKm] = useState('');
  const [obs, setObs] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [fotos, setFotos] = useState([]);

  // executa quando a pagina montar
  useEffect(() => {
    if (!id) return; // se nao tiver id cancela a execução

    // pega dados da API
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/cars/${id}`);
        setModelo(data.modelo);
        setAno(data.ano);
        setCor(data.cor);
        setKm(data.km);
        setObs(data.obs);
        setFotos(data.Photos);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', '');
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }
    getData();
  }, [id]);

  const handleCarroModelo = (nome) => {
    return nome.toUpperCase();
  };

  // função para fechar a visao fullscreen das imagens
  const handleCloseView = (e) => {
    const viewer = e.target.classList.contains('closeViewing');
    if (viewer) setIsActive(false);
  };

  // função para abrir a visao fullscreen das imagens
  const handleOpenView = () => {
    setIsActive(true);
  };

  // botao add fotos
  const handleAddFotos = () => {
    history.push(`/imagem/${id}`);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Viewing className="closeViewing" onClick={handleCloseView}>
        <div className={isActive ? 'viewing active' : 'viewing'}>
          <AiOutlineClose
            onClick={handleCloseView}
            className="closeViewing"
            size={24}
          />
          <ContainerCarousel>
            <Carousel fade>
              {get(fotos[0], 'url', '') ? (
                fotos.map((foto) => (
                  <Carousel.Item key={foto.nome} interval={9999}>
                    <img
                      crossOrigin=""
                      className="carrousel-images"
                      src={foto.url}
                      alt="foto 2"
                    />
                  </Carousel.Item>
                ))
              ) : (
                <Carousel.Item key="364578" interval={9999}>
                  <img
                    crossOrigin=""
                    className="carrousel-images"
                    src={carPlaceholder}
                    alt="foto 2"
                  />
                </Carousel.Item>
              )}
            </Carousel>
          </ContainerCarousel>
        </div>
      </Viewing>
      <h1>{handleCarroModelo(modelo)}</h1>
      <ContainerInfo>
        <div className="info-foto">
          <div className="info-foto-imagem">
            <ContainerCarousel>
              <Carousel fade>
                {get(fotos[0], 'url', '') ? (
                  fotos.map((foto) => (
                    <Carousel.Item
                      key={foto.nome}
                      interval={5000}
                      onClick={handleOpenView}
                    >
                      <img
                        crossOrigin=""
                        className="carrousel-images"
                        src={foto.url}
                        alt="foto 2"
                      />
                    </Carousel.Item>
                  ))
                ) : (
                  <Carousel.Item key="364578" interval={5000}>
                    <img
                      crossOrigin=""
                      className="carrousel-images"
                      src={carPlaceholder}
                      alt="foto 2"
                    />
                  </Carousel.Item>
                )}
              </Carousel>
            </ContainerCarousel>
          </div>
          <div className="info-foto-contato">
            <h4>Gostou?</h4>
            <p>Entre em contato comigo pelo link abaixo e vamos conversar!</p>
            <a
              href="https://wa.me/+5521964458962?text=Vim%20pelo%20site"
              target="_blank"
              rel="noreferrer"
            >
              <div className="botao-wpp">
                <FaWhatsapp />
                <span>Fabio Baltar</span>
              </div>
            </a>
          </div>
        </div>
        {isLoggedIn ? (
          <div className="botao-add-fotos">
            <button onClick={handleAddFotos} type="button">
              add fotos
            </button>
          </div>
        ) : (
          <></>
        )}
        <h4>Informações adicionais</h4>
        <div className="info-dados">
          <div className="info-dados-info">
            <div className="info-dados-info-data">
              <p>Ano:</p>
              <p>{`${ano}`}</p>
            </div>
            <div className="info-dados-info-data">
              <p>Cor: </p>
              <p>{`${cor}`}</p>
            </div>
            <div className="info-dados-info-data">
              <p>KM:</p>
              <p>{`${km} km`}</p>
            </div>
          </div>
          <div className="info-dados-obs">
            <p>{obs}</p>
          </div>
        </div>
      </ContainerInfo>
    </Container>
  );
}

Veiculo.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
