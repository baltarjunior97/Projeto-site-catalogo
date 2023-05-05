import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Counter = styled.nav`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 35px;
  z-index: 29;

  h1 {
    background: ${colors.purpleBg};
    color: ${colors.whiteTxTBg};
    border-radius: 20px;
    font-size: 1rem;
    padding: 0.3rem;
    margin: 0.3rem;
  }

  .views {
    margin-left: 5px;
  }

  @media (min-width: 820px) {
    height: 58px;

    h1 {
      padding: 0.7rem;
      font-size: 1.2rem;
    }

    svg {
      font-size: 1.4rem;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  background: ${colors.purpleBg};
  height: 80px;
  box-shadow: 0px 10px 100px 2px rgba(100, 40, 252, 0.25);

  svg {
    color: ${colors.whiteTxTBg};
    margin-right: 0.3rem;
    cursor: pointer;
  }

  .pc,
  .home-menu {
    display: none;
  }

  .navbar-logo {
    display: flex;
    height: 60px;
    width: 240px;
    margin-left: 20px;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    height: 250px;
    position: absolute;
    top: 115px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s;
    list-style: none;
    text-align: center;
    width: 100vw;
    justify-content: end;
    margin-right: 2rem;
    color: ${colors.whiteTxTBg};
    padding: 0;
    font-size: 1rem;
  }

  .nav-menu.active {
    background: #6668f4;
    left: 0px;
    opacity: 1;
    transition: all 0.5s;
    z-index: 30;
  }

  .nav-links {
    color: ${colors.whiteTxTBg};
    text-decoration: none;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .nav-links:hover {
    background-color: #7577fa;
    border-radius: 0px;
    transition: all 0.2s ease-out;
  }

  @media (min-width: 1157px) {
    height: 95px;

    .pc {
      display: inline;
      font-size: 1.2rem;
    }

    .navbar-logo {
      display: flex;
      height: 80px;
      width: 380px;
    }

    .nav-menu,
    .nav-menu.active,
    .burguer-menu {
      display: none;
    }

    .home-menu {
      color: ${colors.whiteTxTBg};
      text-decoration: none;
      text-align: center;
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: row;
      margin: 0;
      margin-right: 20px;

      svg {
        height: 1.6rem;
        width: 1.6rem;
      }
    }

    .home-menu-item {
      margin-right: 4rem;
      margin-left: 0.4rem;
      font-size: 1.3rem;
      padding: 0.7rem;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        transition: all 300ms ease-in-out;
      }

      .space {
        padding-right: 0.3rem;
      }
    }

    .admin-icons {
      margin-right: 4rem;
    }
  }
`;
