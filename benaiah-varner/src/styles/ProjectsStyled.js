import styled from 'styled-components';

export const ProjectsStyled = styled.section`
  height: auto;
  h2 {
    margin: 8rem 0;
    text-align: center;
    font-size: var(--header-font-size);
  }
  .featured-projects {
    &__card {
      margin-left: 5rem;
      position: relative;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      width: 90%;
      .thumbnail {
        background: white;
        height: 38rem;
        width: 42rem;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 7px 15px 18px 3px #d6d6d6;
        width: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          height: 30rem;
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
          margin-left: 20%;
          font-size: 1.8rem;
        }
        .title {
          font-size: 2.5rem;
          padding: 1rem 0;
        }
        &__text {
          box-shadow: -7px 15px 18px -5px #d6d6d6;
          position: relative;
          right: -20%;
          border-radius: 3px;
          background-color: #c9f7b0;
          height: 18rem;
        }
        p {
          font-size: 1.6rem;
          padding: 4rem 2rem;
          line-height: 2.8rem;
        }
        .list-icons {
          margin-left: 20%;
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
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          a {
            margin-left: 6%;
            display: flex;
            flex-direction: column;
          }
          * {
            margin: 0.9rem 0;
          }
          width: 50%;
          h3 {
            text-align: right;
            margin-right: 20%;
            font-size: 1.8rem;
          }
          .title {
            font-size: 2.5rem;
            padding: 1rem 0;
          }
          &__text {
            box-shadow: 7px 15px 18px -5px #d6d6d6;
            position: relative;
            right: 20%;
            border-radius: 3px;
            background-color: #c9f7b0;
            height: 18rem;
          }
          p {
            font-size: 1.6rem;
            padding: 2rem;
            line-height: 2.8rem;
          }
          .list-icons {
            text-align: right;
            margin-right: 20%;
          }
          ul {
            padding: 1rem 0;
            list-style: none;
            display: flex;
            width: 100%;
            li {
              margin-left: 5%;
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;

export const OtherProjectStyled = styled.section`
  margin-top: 10rem;
  .other-project {
    height: 80rem;
    .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .other-title {
      text-align: center;
      font-size: 4.4rem;
      margin-bottom: 15rem;
    }
    &__card {
      background-color: white;
      width: 25%;
      height: 40rem;
      box-shadow: -10px 15px 30px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      h3 {
        margin: 3rem 0 1rem 0;
        text-align: center;
        font-size: 2.5rem;
      }
      p {
        font-size: 1.6rem;
        padding: 2.5rem;
        line-height: 2.8rem;
        height: 60%;
      }
      .icon-box {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        .github {
        }
        a {
          text-align: center;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;
