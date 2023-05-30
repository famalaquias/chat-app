import styled from 'styled-components';

import image from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > a {
    margin-top: 30px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;

export const Image = styled.div`
  flex: 1;
  background: url(${image}) no-repeat center;
  background-size: cover;
`;
