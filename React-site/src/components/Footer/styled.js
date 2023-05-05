import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Div = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem;
  background: ${colors.purpleBg};
  height: 100px;
  color: ${colors.whiteTxTBg};
  box-shadow: 0px -10px 100px 2px rgba(100, 40, 252, 0.3);
  z-index: 29;

  .footer-logo img {
    display: flex;
    width: 90px;
    height: 90px;
  }

  .footer-trademark {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .footer-trademark p {
    font-size: 0.75rem;
    padding: 0.1rem;
  }

  .footer-trademark h4 {
    text-decoration: underline;
    font-size: 0.95rem;
  }

  .footer-social {
    display: flex;
    flex-direction: column;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .footer-socials h4 {
    font-size: 0.95rem;
    margin: 5px 5px;
    padding-right: 0.8rem;
    text-align: center;
  }

  .footer-socials ul {
    padding-left: 0;
  }
  .footer-socials li {
    display: flex;
  }

  .footer-socials a {
    display: flex;
    text-align: center;
    margin: 0.1rem;
    padding-left: 0.15rem;
    justify-content: center;
    align-items: center;
  }

  .footer-socials span {
    font-size: 0.65rem;
    padding-left: 0.1rem;
  }

  .email-span {
    font-size: 0.2rem;
  }

  @media (min-width: 1157px) {
    height: 140px;

    .footer-logo img {
      display: flex;
      width: 130px;
      height: 130px;
    }

    .footer-trademark p {
      font-size: 1.2rem;
      padding: 0.4rem;
    }

    .footer-trademark h4 {
      text-decoration: underline;
      font-size: 1.5rem;
    }

    .footer-socials {
      margin-right: 3rem;
    }

    .footer-socials h4 {
      font-size: 1.4rem;
      margin: 5px 5px;
      padding-right: 0.8rem;
      text-align: center;
    }

    .footer-socials span {
      font-size: 0.9rem;
      padding-left: 0.1rem;
    }

    .email-span {
      font-size: 0.2rem;
    }

    .footer-socials svg {
      width: 1.3rem;
      height: 1.3rem;
      margin-right: 0.3rem;
    }
    .footer-socials a {
      margin-bottom: 0.3rem;
    }
  }
`;
