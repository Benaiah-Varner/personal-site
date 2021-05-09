import styled from 'styled-components';

export const AboutStyled = styled.section`
  height: 100rem;
  h2 {
    margin-bottom: 4rem;
    text-align: center;
    font-size: var(--header-font-size);
  }
  .about-text {
    .background {
      box-shadow: 1px 2px 9px 0px #d6d6d6;
      border-radius: 3px;
      border: 1px solid #c9f7b0;
      background-color: #c9f7b0;
      width: 50%;
      position: relative;
      height: auto;
      p {
        margin: 8rem 3rem 3rem 3rem;
        padding-top: 20%;
        padding: 3%;
        font-size: 2rem;
        line-height: 3rem;
      }
    }
    .technical-skills {
      border-radius: 3px;
      margin-top: 2%;
      width: 50%;
      position: relative;
      background-color: rgba(195, 244, 239, 0.55);
      box-shadow: 1px 2px 9px 0px #d6d6d6;
    }
    span {
      position: absolute;
      top: 2rem;
      left: -2rem;
      border-radius: 4px;
      box-shadow: 1px 8px 10px -3px grey;
      opacity: 0.8;
      background: white;
      color: #333;
      font-weight: 600;
      padding: 2% 5%;
      font-size: 1.75rem;
    }
    ul {
      padding: 18% 5% 5% 5%;
      list-style: none;
      list-style-position: inside;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        margin: 0.9rem;
        font-size: 2rem;
      }
    }
  }
  .row {
    display: flex;
  }
  .about-images {
    width: 50%;
    position: relative;
    height: 50%;
    z-index: 1;
    margin-right: 5%;
    &__img {
      border-radius: 3px;
      right: 0;
      position: absolute;
      height: 33rem;
      box-shadow: 1px 8px 10px -3px #333;
      transition: all 0.2s;
      &--1 {
        right: 23rem;
        top: 29rem;
      }
      &--2 {
        top: 8rem;
        right: 8rem;
      }
      &--3 {
        right: -5rem;
        top: 26rem;
      }
    }
  }
  @media (max-width: 1200px) {
    h2 {
      margin-top: 10rem;
    }
    .about-images {
      &__img {
        height: 27rem;
        &--1 {
          right: 100%;
          top: 32rem;
        }
        &--2 {
          top: 11rem;
          right: 45%;
        }
        &--3 {
          right: -30%;
          top: 29rem;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .row {
      height: auto;
      flex-direction: column;
    }
    .about-text {
      .background {
        width: 95%;
        p {
          margin: 6rem 3rem 3rem 3rem;
        }
      }
      .technical-skills {
        width: 95%;
      }
      ul {
      padding: 9% 5% 5% 5%;
    }
  }
  .about-images {
      &__img {
        height: 25rem;
        &--1 {
          right: 35%;
          top: 8rem;
        }
        &--2 {
          top: 5rem;
          right: -27%;
        }
        &--3 {
          right: -90%;
          top: 8rem;
        }
      }
    }
  }
  @media(max-width: 700px) {
    height: 73rem;
    .about-images {
      height: 1rem;
      &__img {
   display: none;
      }
    }
  }
  @media (max-width: 500px) {
    .about-text {
      .technical-skills {
        ul {
          padding: 17% 5% 5% 5%;
        }
      }
    }
  }
`;
