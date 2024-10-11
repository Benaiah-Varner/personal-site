import styled from 'styled-components';

export const ProjectsStyled = styled.section`
  width: 85%;
  height: auto;
  h2 {
    margin-top: 0;
    margin-bottom: 8rem;
    text-align: center;
    font-size: var(--header-font-size);
  }
  .featured-projects {
    &__card {
      margin-left: 5rem;
      position: relative;
      display: flex;
      margin-top: 15rem;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
      width: 90%;
      .thumbnail {
        background: white;
        height: 42rem;
        width: 46rem;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 7px 15px 18px 3px #d6d6d6;
        width: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          height: 34rem;
        }
      }
      
      .description {
        .github {
          margin-right: 2rem;
        }
        .featured-icons {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }
        a {
          margin-right: 6%;
          display: flex;
          flex-direction: column;
        }
        * {
          margin: 0.9rem 0;
        }
        width: 50%;
        h3 {
          margin-left: 15%;
          font-size: 1.8rem;
        }
        .title {
          font-size: 2.5rem;
          padding: 1rem 0;
        }
        &__text {
          box-shadow: -7px 15px 18px -5px #d6d6d6;
          position: relative;
          right: -15%;
          border-radius: 3px;
          background-color: #c9f7b0;
          height: 18rem;
          display: flex;
          align-items: center;
        }
        p {
          font-size: 1.6rem;
          padding: 5%;
          line-height: 2.8rem;
        }
        .list-icons {
          margin-left: 15%;
        }
        ul {
          padding: 1rem 0;
          list-style: none;
          display: flex;
          width: 100%;
          li {
            margin-right: 6%;
            font-size: 1.8rem;
          }
        }
      }
      &--2 {
        margin-left: 5rem;
        margin-top: 15rem;
        flex-direction: row;
        justify-content: flex-end;
        .thumbnail {
          box-shadow: -7px 15px 18px 3px #d6d6d6;
          img {
            height: 30rem;
          }
        }
        .description {
          .featured-icons {
            padding: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          a {
            margin-right: 0;
            margin-left: 6%;
            display: flex;
            flex-direction: column;
          }
          * {
            margin: 0.9rem 0;
          }
          h3 {
            text-align: right;
            margin-right: 15%;
            font-size: 1.8rem;
          }
          .title {
            font-size: 2.5rem;
            padding: 1rem 0;
          }
          &__text {
            box-shadow: 7px 15px 18px -5px #d6d6d6;
            position: relative;
            right: 15%;
            border-radius: 3px;
            background-color: #c9f7b0;
            height: 18rem;
          }
          p {
            font-size: 1.6rem;
            padding: 5%;
            line-height: 2.8rem;
          }
          .list-icons {
            text-align: right;
            margin-right: 15%;
          }
          ul {
            display: flex;
            flex-direction: row-reverse;
            li {
              font-size: 1.8rem;
              margin-right: 0;
              margin-left: 6%;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1300px) {
    width: 95%;
    .featured-projects__card {
      
      width: 95%;
      margin-left: 0rem;
      .description {
        &__text {
          height: auto;
          right: 0;
          p {
            font-size: 1.6rem;
            line-height: 2.3rem;
          }
        }
        .list-icons,
        h3 {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .featured-projects__card {
      margin-top: 7rem;
      padding-top: 8rem;
      flex-direction: column;
      .thumbnail {
        width: 95%;
      }
      .description {
        width: 95%;
        text-align: center;
        .featured-icons {
          justify-content: center;
        }
        ul {
          justify-content: center;
        }
      }
      h3 {
        position: absolute;
        top: 0;
        left: 2.5%;
        font-size: 1.8rem;
      }
      .title {
        top: 2rem;
        font-size: 2.5rem;
      }
    }
    .featured-projects__card--2 {
      margin-bottom: 7rem;
    } 
  }
`;

export const OtherProjectStyled = styled.section`
  margin-top: 10rem;
  .other-project {
    height: 80rem;
    .other-icons {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
          display: flex;
          justify-content: center;
        }
    .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .other-title {
      text-align: center;
      font-size: 4.4rem;
      margin-bottom: 15rem;
      opacity: 0;
      transform: translateY(5rem);
      transition: all 1s ease-in-out;
    }
    .other-title.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    &__card {
      opacity: 0;
      transform: translateY(5rem);
      transition: all 0.6s ease-in-out;
      min-height: 388px;
      background-color: white;
      width: 25%;
      height: auto;
      box-shadow: -10px 15px 30px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      h3 {
        margin: 3rem 0 1rem 0;
        text-align: center;
        font-size: 2.5rem;
      }
      p {
        font-size: 1.6rem;
        padding: 0 5%;
        line-height: 2.8rem;
        height: 60%;
      }
      ul {
        font-size: 1.6rem;
        padding: 0 5%;
        padding-left: 10%;
        line-height: 2.5rem;
        height: 60%;
      }
      .icon-box {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        a {
          margin-bottom: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
        }
      }
    }
    &__card.is-visible-1 {
      opacity: 1;
      transform: translateY(0);
      transition-delay: .3s
    }
    &__card.is-visible-2 {
      opacity: 1;
      transform: translateY(0);
      transition-delay: .6s
    }
    &__card.is-visible-3 {
      opacity: 1;
      transform: translateY(0);
      transition-delay: .9s
    }
  }

  @media (max-width: 1200px) {
    .other-project {
      &__card {
        width: 30%;
      }
    }
  }
  @media (max-width: 900px) {
    .other-project {
      height: auto;
      .other-title {
        text-align: center;
        font-size: 4.4rem;
        margin-bottom: 5rem;
      }
      .grid {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      &__card {
        width: 90%;
        position: relative;
        margin-bottom: 2rem;
      }
    }
  }
`;
