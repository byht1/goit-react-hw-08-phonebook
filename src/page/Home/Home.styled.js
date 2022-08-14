import styled from 'styled-components';

export const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 54px);
`;

export const TitleBox = styled.div`
  text-align: center;
`;

export const TextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const TextOne = styled.p`
  font-size: 40px;
`;

export const TextTwo = styled.p`
  font-weight: 500;
  font-size: 60px;
  justify-self: start;
`;

export const Tittle = styled.h1`
  font-weight: 700;
  font-size: 100px;
`;

export const MottoText = styled.p`
  position: absolute;
  bottom: 50px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 30px;

  &::before {
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background-color: #fff;
  }
`;
