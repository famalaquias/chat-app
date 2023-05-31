import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.BLUE};

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 80px;
`;
