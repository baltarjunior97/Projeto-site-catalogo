import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

import { FaEdit, FaWindowClose, FaExclamationCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Container, Title } from './styled';
import carPlaceholder from '../../config/images/carPlaceholder.png';

import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default function Veiculos() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // verifica se usuario está logado

  // seta valor inical variaveis
  const [carros, setCarros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // executa quando a pagina montar
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get('/cars');
        setCarros(response.data);
        setIsLoading(false);
      } catch (err) {
        const status = get(err, 'response.status', '');
        const errors = get(err, 'response.data.errors', []);
        if (status === 400) errors.map((error) => toast.error(error));
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  const handleCarroModelo = (nome) => {
    return nome.toUpperCase();
  };

  // função libera botao de exclusao de veiculo
  const handleConfirmation = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    const confirmation = e.currentTarget;
    exclamation.classList.add('icons', 'red');
    exclamation.classList.remove('icons-off');
    confirmation.remove();
  };

  // funcao botao exclusao de veiculo
  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/cars/${id}`);
      const NovosCarros = [...carros];
      NovosCarros.splice(index, 1);
      setCarros(NovosCarros);
      toast.success('Veículo excluido com sucesso');
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      if (status === 401) {
        toast.error('Login necessário');
      } else {
        toast.error('Ocorreu um erro ao excluir Veículo');
      }
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <div>
        <Title>Catálogo</Title>
      </div>
      <div className="veiculos">
        {carros.map((carro, index) => (
          <div className="veiculos-cards" key={String(carro.id)}>
            <div className="veiculos-cards-title">
              <h4>{handleCarroModelo(carro.modelo)}</h4>
            </div>
            <div className="veiculos-cards-img">
              {get(carro, 'Photos[0].url', '') ? (
                <Link to={`/veiculo/${carro.id}`}>
                  <img crossOrigin="" src={carro.Photos[0].url} alt="" />
                </Link>
              ) : (
                <Link to={`/veiculo/${carro.id}`}>
                  <img src={carPlaceholder} alt="" />
                </Link>
              )}
            </div>
            <div className="veiculos-cards-info">
              <p>{`Ano: ${carro.ano}`}</p>
              <p>{`KM: ${carro.km} km`}</p>
              <Link to={`/veiculo/${carro.id}`}>
                <button type="button">+ Informações</button>
              </Link>
              {isLoggedIn && (
                <div className="veiculos-cards-edit">
                  <Link to={`/veiculo/${carro.id}/edit`}>
                    <FaEdit className="icons" size={20} />
                  </Link>
                  <Link onClick={handleConfirmation} to="/veiculos">
                    <FaWindowClose className="icons" size={20} />
                  </Link>
                  <FaExclamationCircle
                    size={20}
                    className="icons-off"
                    onClick={(e) => handleDelete(e, carro.id, index)}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
