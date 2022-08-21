import styled from 'styled-components';
import { Input } from './../SearchContacts/SearchContacts.styled';

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: var(--background-card-box);
  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpanText = styled.span`
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 10px;
  line-height: 30px;
  font-weight: 500;
  color: #fff;
`;

export const InputForm = styled(Input)`
  display: inline-block;
  padding: 10px 10px 10px 20px;
  margin: 0;
  margin-left: auto;
  width: 300px;
`;

export const ButtonSubmit = styled.input`
  display: block;
  /* max-width: 150px; */
  margin: 0 auto;
  margin-top: 40px;
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
