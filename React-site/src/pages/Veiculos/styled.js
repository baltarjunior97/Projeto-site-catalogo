import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.7rem;
  font-size: 2.3rem;
  color: ${colors.purpleTxT};

  @media (min-width: 1157px) {
    font-size: 2.5rem;
    margin: 1.3rem;
  }
`;

export const Container = styled.div`
  display: block;
  margin: 0.7rem 0;

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

  @media (min-width: 1157px) {
    svg {
      width: 24px;
      height: 24px;
    }
    .veiculos-cards {
      margin: 1rem;
      border: 0.14rem solid ${colors.purpleTxT};
      width: 250px;
      height: 400px;

      h4 {
        font-size: 1.2rem;
      }
    }

    .veiculos-cards-info {
      p {
        font-size: 1rem;
        margin-bottom: 5px;
      }

      button {
        font-size: 0.8rem;
        padding: 0.4rem;
      }
    }
  }
`;
