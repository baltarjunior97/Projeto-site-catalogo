import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  color: ${colors.purpleTxT};
  max-width: 95vw;
  width: 1300px;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;

  h1 {
    margin: 2rem 0;
    text-align: center;
  }
  .botao-catalogo {
    background-color: ${colors.purpleTxT};
    border-radius: 8px;
    padding: 1rem;
    margin-top: 0.6rem;
    h4 {
      color: ${colors.whiteTxTBg};
      text-align: center;
      font-size: 1rem;
    }
  }

  .home-contato {
    display: flex;
    flex-direction: column;
    height: 180px;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  .home-contato-texto {
    display: flex;
    padding: 5px;
    margin-bottom: 1rem;
  }

  .home-contato-wpp {
    border: 2px solid white;
    padding: 5px;
    background-color: #25d366;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    width: 280px;
    height: 150px;

    p {
      font-size: 1rem;
      color: ${colors.whiteBg};
    }

    svg {
      color: ${colors.whiteBg};
    }

    .numero {
      text-decoration: underline;
      font-size: 1.2rem;
    }

    .wpp-botao-contato p {
      text-align: end;
      margin-top: 0.7rem;
      font-size: 0.7rem;
      color: ${colors.purpleTxT};
    }
  }

  @media (min-width: 1157px) {
    h1 {
      margin: 2.5rem 0;
      text-align: center;
    }

    .botao-catalogo {
      padding: 1rem;
      width: 400px;
      margin: 1rem auto;

      h4 {
        font-size: 1.3rem;
      }
    }

    .home-catalago p {
      text-align: center;
    }

    .home-contato {
      height: 180px;
      margin-bottom: 3rem;
    }

    .home-contato-wpp {
      padding: 8px;
      width: 400px;
      height: 250px;

      p {
        font-size: 1.4rem;
      }

      svg {
        width: 55px;
        height: 55px;
      }

      .numero {
        font-size: 1.6rem;
      }

      .wpp-botao-contato p {
        font-size: 0.8rem;
      }
    }
  }
`;

export const ContainerCarousel = styled.div`
  color: ${colors.purpleTxT};

  .container {
    position: relative;
    padding: 15px;
    max-width: 840px;
    margin: 0 auto;
  }

  .gallery {
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;
  }

  .gallery-wrapper {
    overflow-x: auto;
  }

  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;
    font-size: 20px;
    line-height: 250px;
    width: 40px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    border: none;
    background: linear-gradient(to left, transparent 0, black 200%);
    opacity: 0.7;
    transition: all 300ms ease-in-out;
    z-index: 2;
  }

  .arrow-left:hover,
  .arrow-right:hover {
    opacity: 1;
  }

  .arrow-right {
    left: auto;
    right: 0;
    background: linear-gradient(to right, transparent 0, black 200%);
  }

  .item {
    flex-shrink: 0;
    opacity: 1;
    transition: all 300ms ease-in-out;
  }

  .veiculos {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 95vw;
    flex-wrap: wrap;
  }

  .veiculos-cards {
    display: flex;
    flex-direction: column;
    margin: 0.6rem;
    border: 0.14rem solid ${colors.purpleTxT};
    width: 150px;
    height: 300px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    text-align: center;

    h4 {
      color: ${colors.whiteTxTBg};
      font-size: 0.8rem;
      font-weight: bolder;
    }
  }

  .veiculos-cards-title {
    background: ${colors.purpleBg};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 12%;
    width: 100%;
  }

  .veiculos-cards-info {
    background: ${colors.purpleBg};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 37%;
    width: 100%;
    padding: 0.2rem 0.2rem 0.6rem 0.4rem;
    color: ${colors.whiteTxTBg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    p {
      font-size: 0.8rem;
      text-decoration: underline;
    }

    button {
      background: ${colors.whiteTxTBg};
      font-size: 0.6rem;
      margin: 0.3rem;
      padding: 0.4rem;

      &:hover {
        background: rgba(248, 246, 246, 0.9);
      }
    }
  }

  .veiculos-cards-img {
    height: 52%;
  }

  .veiculos-cards img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .veiculos-cards-edit .icons {
    cursor: pointer;
    margin: 0 1rem;
  }
  .veiculos-cards-edit .icons-off {
    display: none;
  }
  .veiculos-cards-edit .red {
    border-radius: 50%;
    color: red;
  }

  .gallery-wrapper::-webkit-scrollbar {
    display: none;
  }

  .gallery-wrapper {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (min-width: 1157px) {
    .veiculos-cards {
      width: 250px;
      height: 400px;

      h4 {
        font-size: 1.2rem;
      }
    }

    .veiculos-cards-info {
      padding: 0.2rem 0.2rem 0.6rem 0.4rem;

      p {
        font-size: 1rem;
        margin-bottom: 5px;
      }

      button {
        font-size: 0.8rem;
        padding: 0.4rem;
      }
    }

    .arrow-left,
    .arrow-right {
      font-size: 30px;
      line-height: 350px;
      width: 60px;
      opacity: 0.4;
      transition: all 300ms ease-in-out;

      &:hover {
        opacity: 1;
      }
    }

    .item {
      opacity: 0.6;
    }

    .current-item {
      opacity: 1;
    }
  }
`;
