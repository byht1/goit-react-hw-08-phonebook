import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Topics } from 'components/Topics/Topics';
import { Box } from 'App.styled';
import { AppBar } from 'page/AppBar/AppBar';
import { PrivateRouter } from 'components/PrivateRouter/PrivateRouter';
import { PublicRouter } from './components/PublicRouter/PublicRouter';
import { useDispatch } from 'react-redux';
import { AuthOperations } from 'redux/user';

import 'react-toastify/dist/ReactToastify.css';

const createAsyncComponent = path => lazy(() => import(`${path}`));

const HomePage = createAsyncComponent('./page/Home/Home.jsx');
const ContactsPage = createAsyncComponent('./page/Contacts/Contacts.jsx');
const SingIn = createAsyncComponent('./page/SingIn/SingIn.jsx');
const SingUp = createAsyncComponent('./page/SingUp/SingUp.jsx');
const ErrorMessage = createAsyncComponent('./page/ErrorMessage/ErrorMessage');

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Box>
      <Routes>
        <Route path="/" exact element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="/error" element={<ErrorMessage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRouter>
                <ContactsPage />
              </PrivateRouter>
            }
          />

          <Route
            path="/sing-in"
            element={
              <PublicRouter restricted>
                <SingIn />
              </PublicRouter>
            }
          />

          <Route
            path="/sing-up"
            element={
              <PublicRouter restricted>
                <SingUp />
              </PublicRouter>
            }
          />

          {/* <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/sing-in" element={<SingIn />} />
          <Route path="/sing-up" element={<SingUp />} /> */}
        </Route>
        <Route
          path="*"
          element={
            <PrivateRouter>
              <ContactsPage />
            </PrivateRouter>
          }
        />
      </Routes>

      <Topics />
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />
    </Box>
  );
};
