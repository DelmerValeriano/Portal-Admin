import React, { useEffect, useReducer } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { AppRouter } from '../src/components/routes/AppRouter';
import firebase, { FirebaseContext } from "../src/firebase";
import { authReducer } from './components/auth/authReducer';
const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return (
    <>
      <CssBaseline />
      <Container false maxWidth>
        <FirebaseContext.Provider value={{ firebase, user, dispatch }}>
          <AppRouter />
        </FirebaseContext.Provider>
      </Container>
    </>
  );
}

export default App;
