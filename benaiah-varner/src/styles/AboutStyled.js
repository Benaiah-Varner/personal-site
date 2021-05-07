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
      color: black;
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
        margin: .9rem;
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
`;
