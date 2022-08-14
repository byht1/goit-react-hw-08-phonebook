import React from 'react';
import {
  HomeWrapper,
  MottoText,
  TextBox,
  TextOne,
  TextTwo,
  TitleBox,
  Tittle,
} from './Home.styled';

export default function Home() {
  return (
    <HomeWrapper>
      <TitleBox>
        <TextBox>
          <TextOne>Your</TextOne>
          <TextTwo>private</TextTwo>
        </TextBox>
        <Tittle>PhoneBook</Tittle>
      </TitleBox>
      <MottoText>We save Your Contacts</MottoText>
    </HomeWrapper>
  );
}
