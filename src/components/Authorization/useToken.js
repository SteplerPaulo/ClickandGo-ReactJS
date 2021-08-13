import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    //return sessionStorage.getItem('token');
    return localStorage.getItem('token');
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    //sessionStorage.setItem('token', userToken.token);
    localStorage.setItem('token', userToken.token);
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}