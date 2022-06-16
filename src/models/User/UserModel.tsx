import React, { useState }from 'react'
import { createModel } from 'hox';

function UserModel() {
  const [user, setUser] = useState('');
  const login = () => setUser('admin');
  const logOut = () => setUser('');
  return {
    user,
    login,
    logOut
  };
}

export default createModel(UserModel)