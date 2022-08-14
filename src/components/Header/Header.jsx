import React from 'react';
import { Container } from 'App.styled';
import { Nav } from 'components/Nav/Nav';
import { HeaderBox } from './Header.styled';

export default function Header() {
  return (
    <HeaderBox>
      <Container>
        <Nav />
      </Container>
    </HeaderBox>
  );
}
