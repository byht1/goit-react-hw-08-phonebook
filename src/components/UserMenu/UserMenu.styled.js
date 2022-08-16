import styled from 'styled-components';

export const BoxMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Img = styled.img`
  width: 43px;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  display: block;
  /* max-width: 150px; */
  margin: 0 auto;
  padding: 5px 20px;

  font-family: 'Orbitron', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  background: transparent;
  border: 1px solid transparent;
  box-shadow: inset 0 0 20px hsl(0deg 0% 100% / 0%);
  color: #fff;
  outline: 2px solid;
  outline-color: hsla(0, 0%, 100%, 0.5);
  outline-offset: 0;
  position: relative;
  text-decoration: none;
  text-shadow: none;
  text-transform: uppercase;
  transition: all 1.25s cubic-bezier(0.19, 1, 0.22, 1);
  :hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px hsl(0deg 0% 100% / 50%),
      0 0 20px hsl(0deg 0% 100% / 20%);
    outline-color: hsla(0, 0%, 100%, 0);
    outline-offset: 15px;
  }
`;
