import React, { useContext} from 'react';
import AuthContext from '../../store/auth-context';

const Title = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <header>
      {!ctx.isLoggedIn && <h1>Login: stoRies woRld :) </h1>}
      {ctx.isLoggedIn && <h1>Home: stoRies woRld :)</h1>}
    </header>
  );
};

export default Title;
