import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  padding: 50px 0;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const CartWrapper = styled.div`
  margin-top: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: minmax(auto, 1fr) 1fr;
    justify-items: center;
    align-items: flex-start;
  }
`;
