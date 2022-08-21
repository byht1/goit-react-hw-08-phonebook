import styled from 'styled-components';

export const ContactListWrapper = styled.div`
  overflow: auto;
  padding: 20px 30px;
  max-width: 600px;
  min-width: 500px;
  width: 100%;
  max-height: 320px;
  border-radius: 5px;
  background-color: var(--background-card-box);
`;

export const Title = styled.h2`
  text-align: center;
`;

export const List = styled.ul`
  margin-top: 30px;
`;

export const Elements = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const NameContacts = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 1.2em;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 5px 15px;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
`;

export const IconBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--contact-list);
  font-size: 20px;
`;
