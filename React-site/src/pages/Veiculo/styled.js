import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  max-width: 90vw;
  width: 1000px;
  background: ${colors.purpleTxT};
  margin: 2rem auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: ${colors.whiteBg};
  h1 {
    text-align: center;
    color: ${colors.purpleTxT};
    background: ${colors.whiteTxTBg};
    font-size: 1.3rem;
    font-weight: bolder;
    margin-bottom: 2rem;
    border-radius: 8px;
  }

  @media (min-width: 817px) {
    h1 {
      margin: auto;
      margin-bottom: 3rem;
      font-size: 2rem;
      width: max-content;
      padding: 0 7rem;
    }
  }
`;

export const ContainerInfo = styled.div`
  overflow-wrap: break-word;
  max-width: 90vw;

  P {
    margin: 0.4rem;
  }

  h4 {
    text-align: center;
    color: ${colors.whiteTxTBg};
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0;
    text-decoration: underline;
    margin-bottom: 1.3rem;
  }
  .info-foto {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 10rem;
    margin-bottom: 2rem;
  }

  .info-foto-imagem {
    display: flex;
    position: relative;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 68%;
    margin-right: 0.4rem;
    cursor: pointer;
  }

  .info-foto-contato {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 32%;

    a {
      color: ${colors.whiteBg};
    }

    a:hover {
      text-decoration: none;
      color: ${colors.whiteBg};
    }

    h4 {
      text-decoration: none;
      margin-bottom: 0;
    }
    p {
      font-size: 0.8rem;
      color: ${colors.whiteTxTBg};
    }
  }

  .botao-wpp {
    margin-left: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.2rem;
    text-align: center;
    background: #25d366;
    border-radius: 8px;
    padding: 0.2rem;
    position: relative;
    z-index: 14;
    span {
      font-size: 0.7rem;
    }
  }

  .botao-add-fotos {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    button {
      z-index: 14;
      background: ${colors.whiteTxTBg};
    }
  }

  .info-dados {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: ${colors.purpleTxT};
    background: ${colors.whiteTxTBg};
    border-radius: 8px;

    p {
      font-weight: bolder;
    }
  }

  .info-dados-info {
    display: inline-flex;
  }

  .info-dados-info-data {
    margin-right: 0.5rem;
  }

  .info-dados-obs p {
    color: ${colors.purpleTxT};
    margin: 0;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  @media (min-width: 817px) {
    P {
      margin: 0.6rem;
      font-size: 1.3rem;
    }

    h4 {
      font-size: 2rem;
    }

    .info-foto {
      margin-bottom: 8rem;
    }

    .info-foto-imagem {
      height: 100%;
      width: 68%;
    }

    .info-foto-contato {
      height: 100%;
      width: 32%;

      p {
        font-size: 1.2rem;
      }
    }

    .botao-wpp {
      margin-top: 0.5rem;
      border-radius: 8px;
      padding: 0.4rem;

      svg {
        width: 30px;
        height: 30px;
        margin-right: 5px;
      }

      span {
        font-size: 1.5rem;

        &:hover {
          font-size: 1.6rem;
        }
      }

      &:hover {
        background: rgba(37, 211, 102, 0.9);
        transition: all 200ms ease-in-out;
      }
    }

    .botao-add-fotos {
      margin-bottom: 30px;

      button {
        font-size: 1.2rem;

        &:hover {
          background: rgba(248, 246, 246, 0.9);
        }
      }
    }

    .info-dados-info-data {
      margin-right: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const ContainerCarousel = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;

  .carousel {
  }
  .carousel-inner {
    display: flex;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 40px 0px rgba(255, 255, 252, 0.4);
    border-radius: 4px;
  }

  .carrousel-images {
    display: flex;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 817px) {
    .carousel {
      width: 500px;
      height: 250px;
    }
  }
`;

export const Viewing = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 115px;
  top: 0;
  left: 0;

  .viewing {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 15;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .active {
    display: flex;
  }

  svg {
    position: absolute;
    background: transparent;
    color: ${colors.whiteBg};
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .carousel {
    margin: auto;
    width: 80vw;
    z-index: 12;
  }

  @media (min-width: 817px) {
    top: 38px;

    svg {
      top: 20px;
      right: 20px;
    }

    .carousel {
      max-width: 70vw;
      max-height: 80vh;
      width: 1200px;
      height: 700px;
    }
  }
`;
