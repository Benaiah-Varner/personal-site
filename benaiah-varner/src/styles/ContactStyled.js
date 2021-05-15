import styled from 'styled-components';

export const ContactStyled = styled.section`
  height: auto;
  margin-bottom: 25vh;
  margin-top: 8vh;
  h2 {
    text-align: center;
    margin-bottom: 8rem;
    font-size: var(--header-font-size);
  }
  .get-in-touch {
    margin: 5rem auto;
    width: 40%;
    padding: 1.5rem 4rem;
    p {
      display: block;
    }
  }
  .form-container {
    border-radius: 3px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    height: 90%;
    width: 50%;
    margin: 0 auto;
    background: white;

    h3 {
      padding-top: 4rem;
      margin: 2rem 0;
      text-align: center;
      font-size: 3rem;
    }
    form {
      height: 100%;
      display: flex;
      flex-direction: column;
      .success-message {
        font-size: 2.2rem;
        padding-bottom: 4%;
        text-align: center;
      }
      .contact-info {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 25%;
        width: 100%;
        label {
          font-size: 2.5rem;
          width: 40%;
          display: flex;
          flex-direction: column;
          padding: 5% 0;
          input {
            width: 100%;
            padding: 10% 0;
            padding-bottom: 2%;
            border: none;
            border-bottom: 2px solid black;
            &[placeholder] {
              font-size: 2rem;
            }
            &:focus {
              outline: none;
            }
          }
        }
      }
      .message {
        height: 50%;
        label {
          width: 87%;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          p {
            padding-bottom: 5%;
            font-size: 2.5rem;
          }
        }
        textarea {
          width: 100%;
          border: none;
          border-bottom: 2px solid black;
          &[placeholder] {
            font-size: 2rem;
            font-family: 'arial', sans-serif;
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .form-container {
      width: 80%;
    }
  }
  @media (max-width: 910px) {
    margin-top: 25vh;
    .form-container {
      .get-in-touch {
        font-size: 1.8rem;
      }
    }
  }
  @media (max-width: 625px) {
    h2 {
      margin-bottom: 5rem;
      margin-top: 25rem;
    }
    .form-container {
      width: 90%;
      .get-in-touch {
        padding: 1rem 4rem;
        width: 50%;
      }
      form {
        .contact-info {
          flex-direction: column;
          label {
            width: 90%;
          }
        }
      }
    }
  }
`;
