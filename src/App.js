import React, { useState } from 'react';
import LoginForms from './components/LoginForms';

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin',
  };

  const [user, setuser] = useState({ name: '', email: '' });
  const [error, seterror] = useState('');

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('Logged in');
      setuser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log('Details do not match!');
      seterror('Details do not match!');
    }
  };

  const logout = () => {
    console.log('logout');
    setuser({ name: '', email: '' });
  };

  return (
    <div className="App">
      {user.email != '' ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForms Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
