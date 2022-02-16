import React, {createContext, useState} from 'react';
export const UserSignUpContext = createContext({
  userSignUpData: {},
  setUsersSignUpData: () => null,
});
const UsersSignUpDataContext = ({children}) => {
  const [usersSignUpData, setUsersSignUpData] = useState({});
  return (
    <UserSignUpContext.Provider
      value={{
        usersSignUpData,
        setUsersSignUpData: value => setUsersSignUpData(value),
      }}>
      {children}
    </UserSignUpContext.Provider>
  );
};

export default UsersSignUpDataContext;
