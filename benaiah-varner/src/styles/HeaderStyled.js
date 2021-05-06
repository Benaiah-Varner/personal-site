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
  .get-in-touch {
    border: 2px solid black;
    background: white;
    margin: 9rem 0; 
    padding: 1.2rem 1.4rem;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all .4s;
  }
  .get-in-touch:hover {
    background: var(--color-black);
    color: white;
    transform: translateY(-.9rem);
    box-shadow: 1px 8px 10px -3px #333;
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
`;