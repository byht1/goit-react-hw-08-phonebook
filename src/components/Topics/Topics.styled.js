import styled from 'styled-components';

export const Div = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  border-radius: 20px 0 0 20px;
  background-color: #ffffff;
  transform: translateY(-50%);
`;

export const Li = styled.li`
  width: 30px;
  height: 30px;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ButtonPink = styled(Button)`
  background-color: #ff226d;
`;

export const ButtonDark = styled(Button)`
  background-color: #031321;
`;

export const ButtonGrin = styled(Button)`
  background-color: #22b642;
`;

export const ButtonViolet = styled(Button)`
  background-color: #d52af3;
`;
