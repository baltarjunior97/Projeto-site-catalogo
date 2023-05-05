import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 90vw;
  h1 {
    color: ${colors.purpleTxT};
    text-align: center;
    margin: 0.8rem;
  }
  h4 {
    color: ${colors.purpleTxT};
    margin: 0.4rem;
    font-size: 1.2rem;
  }
  p {
    color: ${colors.purpleTxT};
    margin: 0 0.8rem 0.8rem 0.4rem;
    font-size: 0.8rem;
  }

  .contact {
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    border: 3px solid;
    margin-bottom: 0.8rem;
    border-radius: 8px;
    padding: 1rem;
    max-width: 90vw;
    width: 700px;

    h4 {
      text-decoration: underline;
    }

    p {
      font-size: 0.85rem;
    }
  }

  .contact-text {
    margin-left: 0.5rem;
    text-align: center;
  }

  .whatsapp {
    border-color: #25d366;
    color: #25d366;
    box-shadow: -6px -8px 25px -15px rgba(37, 211, 102, 0.6);
    box-shadow: inset 0px 0px 15px 0px rgba(37, 211, 102, 0.4);

    p,
    h4,
    a {
      color: #25d366;
    }
  }

  .facebook {
    border-color: #3b5998;
    color: #3b5998;
    box-shadow: -6px -8px 25px -15px rgba(59, 89, 152, 0.6);
    box-shadow: inset 0px 0px 15px 0px rgba(59, 89, 152, 0.4);
    p,
    h4,
    a {
      color: #3b5998;
    }
  }

  .phone {
    border-color: #000;
    color: #000;
    box-shadow: -6px -8px 25px -15px rgba(0, 0, 0, 0.6);
    box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.4);

    p,
    h4 {
      color: #000;
    }
  }

  .email {
    border-color: #084c8c;
    box-shadow: -6px -8px 25px -15px rgba(8, 76, 140, 0.6);
    box-shadow: inset 0px 0px 15px 0px rgba(8, 76, 140, 0.4);

    p,
    h4,
    a {
      color: #084c8c;
    }
  }

  @media (min-width: 1157px) {
    h4 {
      margin: 0.6rem;
      font-size: 1.4rem;
    }
    p {
      color: ${colors.purpleTxT};
      margin-top: 0.5rem;
      font-size: 1rem;
    }

    .contact {
      margin: 1rem;

      svg {
        width: 50px;
        height: 50px;
        margin-right: 0.8rem;
      }
    }

    .contact-text {
      p {
        font-size: 1.2rem;
      }
      h4 {
        font-size: 1.6rem;
      }
    }

    .contact-text h4:hover {
      font-size: 1.7rem;
      transition: all 200ms ease-in-out;
    }
  }
`;
