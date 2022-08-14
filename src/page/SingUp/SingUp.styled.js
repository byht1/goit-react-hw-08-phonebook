import styled from 'styled-components';

export const WrapperSingUp = styled.div`
  width: 100%;
  height: calc(100vh - 54px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Text = styled.p`
  font-size: 36px;
  font-weight: 700;
`;

export const Label = styled.label`
  display: block;

  &:not(:first-child) {
    margin-top: 30px;
  }
`;

export const FormText = styled.span`
  display: inline-block;
  width: 100px;
  margin-right: 30px;
  text-align: right;
`;
