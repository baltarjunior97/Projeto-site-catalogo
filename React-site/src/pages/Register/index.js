import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import { FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import carPlaceholder from '../../config/images/carPlaceholder.png';
import { Container } from '../../styles/GlobalStyles';
import { Form, ProfilePicture, Title } from './styled';

import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Register({ match }) {
  const dispatch = useDispatch(); // disparador de açoes
  const id = get(match, 'params.id', 0); // pega id dos parametros da pagina

  // seta variaveis
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [km, setKm] = useState('');
  const [obs, setObs] = useState('');
  const [foto, setFoto] = useState('');
  const [file, setFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // executa quando a pagina montar
  useEffect(() => {
    if (!id) return; // se nao tiver id cancela a execução

    // pega os dados da API
    async function getData() {
      const ac = new AbortController();
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/cars/${id}`);
        setModelo(data.modelo);
        setAno(data.ano);
        setCor(data.cor);
        setKm(data.km);
        setObs(data.obs);
        const profilePicture = get(data, 'Photos[0].url', '');
        setFoto(profilePicture);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', '');
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }

      return ac.abort();
    }
    getData();
  }, [id]);

  // input file seta foto de perfil do veiculo
  const setProfilePic = async (novoID) => {
    // se tiver enviado foto, pega a foto e add ao formulario para enviar
    if (file) {
      const formData = new FormData();
      formData.append('carro_id', novoID);
      formData.append('fotos', file);

      try {
        await axios.post('/fotos', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setIsLoading(false);
        history.push(`/veiculo/${novoID}`);
      } catch (err) {
        setIsLoading(false);
        const { status } = get(err, 'response', '');
        if (status === 401) dispatch(actions.loginFailure());
      }
    } else {
      // se nao tiver enviado foto segue normalmente
      setIsLoading(false);
      history.push(`/veiculo/${novoID}`);
    }
  };

  // botao enviar dados formulario com validação dos dados
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (modelo.length < 2 || modelo.length >= 255) {
      formErrors = true;
      toast.error('Campo modelo deve ter entre 3 e 255 linhas');
    }
    if (ano.length < 3 || ano.length >= 255) {
      formErrors = true;
      toast.error('Campo ano deve ter entre 3 e 255 linhas');
    }
    if (cor.length < 3 || cor.length >= 255) {
      formErrors = true;
      toast.error('Campo cor deve ter entre 3 e 255 linhas');
    }
    if (obs.length < 3 || obs.length >= 255) {
      formErrors = true;
      toast.error('Campo obs deve ter entre 3 e 255 linhas');
    }

    if (formErrors) return;

    let novoID = 0;

    try {
      setIsLoading(true);
      // verifica se é uma adição de carro novo ou se é uma edição de carro ja criado
      if (id) {
        await axios.put(`/cars/${id}`, { modelo, ano, cor, km, obs });
      } else {
        await axios.post(`/cars`, { modelo, ano, cor, km, obs });
      }
      const response = await axios.get(`/cars`);
      const geNovoID = setInterval(async () => {
        clearInterval(geNovoID);
        novoID = response.data[0].id;
        setProfilePic(novoID);
        if (id) {
          toast.success('Veículo editado com sucesso');
        } else toast.success('Veículo criado com sucesso');
      }, 3000);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', 0);
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        // eslint-disable-next-line
        errors.map((error) => {
          toast.error(error);
        });
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) dispatch(actions.loginFailure());

      console.log(err);
      setIsLoading(false);
    }
  };

  // cria url para mostrar a foto de perfil selecionada
  const handlePicutre = (e) => {
    const ProfPic = e.target.files[0];
    const fileURL = URL.createObjectURL(ProfPic);
    setFile(ProfPic);
    setFoto(fileURL);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar veículo' : 'Novo veículo'}</Title>

      <ProfilePicture>
        {foto ? (
          <img crossOrigin="" src={foto} alt="foto iamgem carro" />
        ) : (
          <form>
            <label className="labelFoto" htmlFor="foto">
              {foto ? (
                <img crossOrigin="" src={foto} alt="carplaceholder" />
              ) : (
                <img src={carPlaceholder} alt="carplaceholder" />
              )}
              <input
                className="formFoto"
                type="file"
                id="foto"
                onChange={handlePicutre}
              />
              <FaEdit size={25} />
            </label>
          </form>
        )}
      </ProfilePicture>

      <div>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={modelo}
            placeholder="Modelo"
            onChange={(e) => setModelo(e.target.value)}
          />
          <input
            type="text"
            value={ano}
            placeholder="Ano"
            onChange={(e) => setAno(e.target.value)}
          />
          <input
            type="text"
            value={cor}
            placeholder="Cor"
            onChange={(e) => setCor(e.target.value)}
          />
          <input
            type="text"
            value={km}
            placeholder="KM"
            onChange={(e) => setKm(e.target.value)}
          />
          <input
            type="text"
            value={obs}
            placeholder="Obs"
            onChange={(e) => setObs(e.target.value)}
          />

          <button type="submit">Enviar</button>
        </Form>
      </div>
    </Container>
  );
}

Register.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
