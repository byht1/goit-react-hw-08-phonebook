import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Topics } from 'components/Topics/Topics';
import { Box } from 'App.styled';
import { AppBar } from 'page/AppBar/AppBar';

const createAsyncComponent = path => lazy(() => import(`${path}`));

const HomePage = createAsyncComponent('./page/Home/Home.jsx');
const ContactsPage = createAsyncComponent('./page/Contacts/Contacts.jsx');
const SingIn = createAsyncComponent('./page/SingIn/SingIn.jsx');
const SingUp = createAsyncComponent('./page/SingUp/SingUp.jsx');

export const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" exact element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/sing-in" element={<SingIn />} />
          <Route path="/sing-up" element={<SingUp />} />
        </Route>
      </Routes>

      <Topics />
    </Box>
  );
};
