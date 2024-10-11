import styled from 'styled-components';

export const HeaderStyled = styled.div`
  height: 100vh;
  position: relative;
  z-index: 2;
  animation: fade-in 1.5s;
  .header {
    text-align: left;
    position: absolute;
    top: 18%;
    left: 13%;
    h1,
    h2 {
      padding: 1.2rem 0;
      font-size: 7.7rem;
    }
    p {
      padding: 1rem 0;
      font-size: 2.3rem;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(5rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .header {
      text-align: left;
      position: absolute;
      top: 18%;
      left: 8%;
      h1,
      h2 {
        padding: 1.2rem 0;
        font-size: 5.7rem;
      }
      p {
        padding: 1rem 0;
        font-size: 2.3rem;
      }
    }
  }
  
  @media (max-width: 420px) {
    .header {
      text-align: left;
      position: absolute;
      top: 18%;
      left: 8%;
      h1,
      h2 {
        padding: 1.2rem 0;
        font-size: 4.7rem;
      }
      p {
        padding: 1rem 0;
        font-size: 2.3rem;
      }
    }
  }
`;
