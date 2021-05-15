import styled from 'styled-components';

export const NavStyled = styled.div`
  .nav {
    position: relative;
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
    .burger-links {
      transition: all 0.6s;
      opacity: ${({ open }) => (open ? '100%' : '0%')};
      position: absolute;
      top: 50vh;
      z-index: 1;
      right: 50%;
      transform: translateX(50%) translateY(-50%);
      font-size: 2.2rem;
      font-weight: 600;
      ul {
        text-align: center;
        list-style: none;
        li {
          margin: 30% 0;
        }
      }
    }
    .burger-wrapper {
      position: relative;
      margin-right: 10%;
      width: 3rem;
      height: 3rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      transform-origin: 1px;

      div:not(.background) {
        transition: all 0.2s linear;
        border-bottom: 0.4rem solid #333;
        border-radius: 1rem;
        &:nth-child(1) {
          transform: ${({ open }) =>
            open ? 'rotate(45deg) translateY(14px)' : 'rotate(0deg)'};
        }
        &:nth-child(2) {
          opacity: ${({ open }) => (open ? '0%' : '100%')};
        }
        &:nth-child(3) {
          transform: ${({ open }) =>
            open ? 'rotate(-45deg) translateY(-15px)' : 'rotate(0deg)'};
        }
      }
    }
  }
  .background {
    position: absolute;
    border-radius: 50%;
    top: 6%;
    right: 10%;
    height: 5rem;
    width: 5rem;
    z-index: -1;
    background-color: ${({ open }) =>
      open ? 'var(--primary-green)' : 'inherit'};
    transition: all 0.5s;
    transform: ${({ open }) => (open ? 'scale(80)' : 'scale(1)')};
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
      justify-content: space-between;
    }
    .links {
      li {
        font-size: 1.5rem;
      }
    }
  }
`;