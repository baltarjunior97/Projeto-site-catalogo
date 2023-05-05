import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Contato from '../pages/Contato';
import Home from '../pages/Home';
import Imagens from '../pages/Imagens';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Register from '../pages/Register';
import Veiculos from '../pages/Veiculos';
import Veiculo from '../pages/Veiculo';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} isClosed={false} />
      <MyRoute exact path="/veiculo" component={Register} isClosed />
      <MyRoute exact path="/imagem/:id" component={Imagens} isClosed />
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute exact path="/veiculos" component={Veiculos} isClosed={false} />
      <MyRoute exact path="/veiculo/:id" component={Veiculo} isClosed={false} />
      <MyRoute exact path="/veiculo/:id/edit" component={Register} isClosed />
      <MyRoute exact path="/contato" component={Contato} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
