import styled from 'styled-components';

const StyledPanel = styled.div`
  width: 28rem;
  height: auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.lightBlack};

  ${({ theme }) => theme.mq.tablet} {
    width: 40rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 43rem;
  }
`;

export default StyledPanel;
