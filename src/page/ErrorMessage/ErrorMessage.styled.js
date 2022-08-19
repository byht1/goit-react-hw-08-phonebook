import styled from 'styled-components';

export const ErrorMessageBox = styled.div`
  margin-top: 50px;
  padding: 15px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: rgba(255, 0, 0, 0.2);
`;

export const TextError = styled.p`
  display: inline-block;
`;

export const ErrorStatus = styled(TextError)`
  margin-left: 5px;
  font-weight: 700;
`;

export const ErrorTitle = styled.span`
  text-decoration: underline;
`;
