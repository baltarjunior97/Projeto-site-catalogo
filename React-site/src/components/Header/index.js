import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash';

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlinePoweroff,
  AiFillHome,
} from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';
import { FaRegEye, FaCarAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import banner1 from '../../config/images/banner1.png';
import { MenuItems } from './MenuItems';
import { Nav, Counter } from './styled';

import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch(); // dispara as ações /store/modules/auth
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // checa usuario logado

  // estado de variaveis
  const [visitor, setVisitor] = useState('');
  const [active, setActive] = useState(false);

  // executa quando a pagina montar
  useEffect(() => {
    let counter = 0;
    async function getData() {
      // pega dados da API
      try {
        const { data } = await axios.get(`/counter`);
        setVisitor(data.counter);
        counter = data.counter;
        const getCounter = setInterval(async () => {
          clearInterval(getCounter);
          counter += 1;
          await axios.put(`/counter`, { counter });
        }, 5000);
      } catch (err) {
        const status = get(err, 'response.status', '');
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
      }
    }
    getData();
  }, []);// eslint-disable-line

  // função toogle botao menu
  const handleActive = () => {
    setActive(!active);
  };

  // função desativa menu quando clicar em algum link
  const handleClose = () => {
    setActive(false);
  };

  // função botao logout
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
  };

  return (
    <>
      <Counter>
        <h1>
          Counter:
          {`  ${visitor} `}
          <FaRegEye className="views" />
        </h1>
      </Counter>
      <Nav>
        <Link to="/">
          <img src={banner1} className="navbar-logo" alt="logo" />
        </Link>
        <ul className="home-menu">
          <Link className="home-menu-item" to="/" onClick={handleActive}>
            <li>
              <AiFillHome />
              <span className="space">{` `}</span>
              Home
            </li>
          </Link>
          <Link
            className="home-menu-item"
            to="/veiculos"
            onClick={handleActive}
          >
            <li>
              <FaCarAlt />
              <span className="space">{` `}</span>
              Veículos
            </li>
          </Link>
          <Link className="home-menu-item" to="/contato" onClick={handleActive}>
            <li>
              <MdPhoneInTalk />
              <span className="space">{` `}</span>
              Contato
            </li>
          </Link>
        </ul>
        {isLoggedIn && (
          <>
            <Link className="admin-icons" to="/veiculo" onClick={handleClose}>
              <IoMdAddCircleOutline size={30} />
              <span className="add-veiculo pc">Add Veículo</span>
            </Link>
            <Link className="admin-icons logout" to="/" onClick={handleLogout}>
              <AiOutlinePoweroff size={28} />
              <span className="add-veiculo pc">Logout</span>
            </Link>
          </>
        )}

        {!active ? (
          <AiOutlineMenu
            className="burguer-menu"
            size={22}
            onClick={handleActive}
          />
        ) : (
          <AiOutlineClose
            className="burguer-menu"
            size={22}
            onClick={handleActive}
          />
        )}
        <ul className={!active ? 'nav-menu' : 'nav-menu active'}>
          {MenuItems.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  className={item.cName}
                  to={item.url}
                  onClick={handleActive}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Nav>
    </>
  );
}
