import styled from 'styled-components';

export const FooterStyled = styled.div`
    position: absolute;
    height: 70vh;
    z-index: -1;
    bottom: 0;
    background: linear-gradient(to right bottom, var(--primary-blue), var(--primary-green));
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .social-icons {
        margin-bottom: 11.5vh;
        font-size: 4rem;
        .footer-icon {
            margin: 0 2rem;
        }
    }
 ::after {
  position: absolute;
  content: "";
  height: 30%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(#fafafa 0%, transparent 100%);
}
`;