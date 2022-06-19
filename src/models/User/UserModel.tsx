import React, { useState }from 'react'
import { createModel } from 'hox';

function UserModel() {
  const [user, setUser] = useState<any>();
  const login = (data:any) => setUser(data);
  const logOut = () => setUser('');
  return {
    user,
    login,
    logOut
  };
}

export default createModel(UserModel)