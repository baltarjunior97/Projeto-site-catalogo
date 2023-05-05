import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Title, Form, Texto } from './styled';
import Loading from '../../components/Loading';

import axios from '../../services/axios';
import history from '../../services/history';

export default function Imagens({ match }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // verifica se esta logado
  const id = get(match, 'params.id', 0); // caso tenha, pega o ad

  // seta as variaveis
  const [modelo, setModelo] = useState('');
  const [foto, setFoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // executa quando a pagina montar
  useEffect(() => {
    // se nao tiver id ou nao tiver logado cancela a execução
    if (!id) return;
    if (!isLoggedIn) return;

    // se passar da parte acima pega os dados da API
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/cars/${id}`);
        setModelo(data.modelo);
        const profilePicture = get(data, 'Photos[0].url', '');
        setFoto(profilePicture);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        toast.error('Erro ao obter imagem');
        history.push('/');
      }
    }
    getData();
  }, [id, isLoggedIn]);

  const handleCarroModelo = (nome) => {
    return nome.toUpperCase();
  };

  // função enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // formulario virtual apra enviar fotos
    const formData = new FormData(e.currentTarget);
    formData.append('carro_id', id);
    const arquivos = e.currentTarget[0].files; // pega input file
    if (arquivos.length <= 0) {
      toast.error('Nenhum arquivo adicionado');
      return;
    }
    // adiciona todas as fotos do file no formulario virtual
    for (let i = 0; i < arquivos.length; i++) {
      formData.append('fotos', arquivos[i]);
    }
    try {
      setIsLoading(true);
      await axios.post('/fotos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setIsLoading(false);
      toast.success('Fotos Enviadas');
      history.push(`/veiculo/${id}`);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toast.error('Erro ao enviar fotos');
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{handleCarroModelo(modelo)}</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="foto">
          {foto ? (
            <img crossOrigin="" src={foto} alt="foto de perfil" />
          ) : (
            'selecionar'
          )}
          <input multiple type="file" id="foto" />
        </label>
        <button type="submit">Enviar</button>
      </Form>

      <Texto>Clique na imagem para adicionar mais fotos!</Texto>
    </Container>
  );
}

Imagens.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
