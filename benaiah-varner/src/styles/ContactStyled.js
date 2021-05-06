import styled from 'styled-components';

export const ContactStyled = styled.section`
  height: auto;
  margin-bottom: 25vh;
  h2 {
    text-align: center;
    margin-bottom: 8rem;
    font-size: var(--header-font-size);
  }
  .form-container {
    border-radius: 5px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    height: 90%;
    width: 50%;
    margin: 0 auto;
    background: white;
    .get-in-touch {
        width: 25%;
        border: 2px solid black;
        background: white;
        margin: 4rem auto;
        padding: 1.2rem 1.4rem;
        font-size: 1.8rem;
        cursor: pointer;
        transition: all 0.4s;
    }
    .get-in-touch:hover {
        background: var(--color-black);
        color: white;
        transform: translateY(-0.9rem);
        box-shadow: 1px 8px 10px -3px #333;
    }
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
          }
        }
      }
    }
  }
`;
