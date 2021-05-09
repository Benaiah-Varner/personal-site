import styled from 'styled-components';

export const NavStyled = styled.div`
  .nav {
    box-shadow: ${(props) => (props.scrolled ? '0px 0px 5px grey' : 'none')};
    transition: all 0.4s;
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
    position: fixed;
    z-index: 3;
    background-color: ${(props) => (props.scrolled ? 'white' : 'transparent')};
    .logo {
      cursor: pointer;
      padding-left: 10%;
      font-size: 4rem;
      font-family: 'Lobster', cursive;
      font-weight: 800;
      a {
        text-decoration: none;
      }
    }
  }
  .links {
    cursor: pointer;
    padding-right: 10%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
      width: 50%;
    }
    li:not(.res-li) {
      position: relative;
      font-weight: 700;
      margin-left: 20%;
      font-size: 1.8rem;
      padding: 2% 4%;
      transition: all 0.2s ease-in-out;
      a {
        text-decoration: none;
      }
      &:before {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 0%;
        height: 2px;
        background: black;
        transition: all 0.25s;
      }
      &:hover:before {
        width: 100%;
      }
      &:hover {
        transform: scale(1.03);
      }
    }
    .resume {
      border-radius: 3px;
      border: 2px solid black;
      transition: all 0.4s;
      font-weight: 700;
      margin-left: 20%;
      font-size: 1.8rem;
      padding: 2% 4%;
      transition: all 0.2s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
        background: var(--color-black);
        transform: translateY(-0.2rem);
        color: white;
      }
    }
  }
  @media (max-width: 500px) {
    .nav {
      justify-content: space-around;
      .logo {
        padding-left: 0;
        font-size: 3rem;
      }
    }
    .links {
      li {
        font-size: 1.5rem;
      }
    }
  }
`;
