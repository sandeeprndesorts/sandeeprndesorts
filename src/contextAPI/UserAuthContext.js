import React, {createContext, useState} from 'react';
export const UserAuth = createContext({
  userAuthData: '',
  setUserAuthContext: () => null,
});
const UserAuthContext = ({children}) => {
  const [userAuthContext, setUserAuthContext] = useState(null);
  return (
    <UserAuth.Provider
      value={{
        userAuthContext,
        setUserAuthContext: value => setUserAuthContext(value),
      }}>
      {children}
    </UserAuth.Provider>
  );
};

export default UserAuthContext;
