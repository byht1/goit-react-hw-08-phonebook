import styled from 'styled-components';

export const WrapperModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8); ;
`;

export const BoxModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: 500px; */
  padding: 20px 15px;

  border-radius: 10px;
  background-color: var(--background-section);
`;
