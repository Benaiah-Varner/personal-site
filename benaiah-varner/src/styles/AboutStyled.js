import styled from 'styled-components';

export const AboutStyled = styled.section`
  height: 100rem;
  h2 {
    margin-bottom: 4rem;
    text-align: center;
    font-size: var(--header-font-size);
  }

  .about-text {
    span {
      color: darkgrey;
      font-weight: 600;
      font-size: 1.75rem;
      position: relative;

      &:before {
        margin: 0 1rem;
        content: '';
        position: absolute;
        height: 5px;
        border-top: 1px solid darkgrey;
        top: 50%;
        max-width: 300px;
      }

      &:before {
        left: 100%;
        width: 40rem;
      }
    }
    ul {
      margin: 2rem 0;
      list-style: none;
      list-style-position: inside;
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        margin: 10% 0;
        font-size: 2rem;
        &:before {
          content: '>';
          padding-right: 1rem;
          font-size: 1.5rem;
        }
      }
    }
    p {
      margin: 2rem 0;
      padding: 1rem 0;
      font-size: 2rem;
      max-width: 50%;
      line-height: 3rem;
      width: 50%;
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
  }

  .about-images {
    width: 50%;
    position: relative;
    z-index: 1;

    &__img {
      border-radius: 3px;
      outline-offset: 1.5rem;
      right: 0;
      position: absolute;
      height: 30rem;
      box-shadow: 1px 8px 10px -3px #333;
      transition: all 0.2s;
      &--1 {
        right: 28rem;
        top: 18rem;
      }
      &--2 {
        top: 2rem;
        right: 12rem;
      }
      &--3 {
        top: 22rem;
      }
    }
  }
`;
