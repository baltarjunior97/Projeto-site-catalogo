import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Form, Div } from './styled';

import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch(); // disparador de ações
  const prevPath = get(props, 'location.state.prevPath', '/'); // variavel ultimo caminho que o usuario estava
  const isLoading = useSelector((state) => state.auth.isLoading);

  // seta estados das variaveis
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  // botao envia formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (user.length < 3 || user.length > 255) {
      formErrors = true;
      toast.error('Usuário inválido');
    }
    if (password.length < 6 || password.length > 255) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if (formErrors) return;

    // executa o pedido de login, se passar usuario loga, se nao erro
    dispatch(actions.loginRequest({ user, password, prevPath }));
  };

  return (
    <Div>
      <Container>
        <Loading isLoading={isLoading} />
        <Form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <input
            type="text"
            placeholder="usuário"
            value={user}
            onChange={(e) => setUser(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    </Div>
  );
}
