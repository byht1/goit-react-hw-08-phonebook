import { Container } from 'App.styled';
import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={'Loader...'}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
