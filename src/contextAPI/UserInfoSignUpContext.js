import React, {createContext, useState} from 'react';
export const UserInfoSignUpContext = createContext({
  userInfoSignUpContext: '',
  setUserInfoSignUpContext: () => null,
});
const UserInfoSignUpDataContext = ({children}) => {
  const [userInfoSignUpContext, setUserInfoSignUpContext] = useState(null);
  return (
    <UserInfoSignUpContext.Provider
      value={{
        userInfoSignUpContext,
        setUserInfoSignUpContext: value => setUserInfoSignUpContext(value),
      }}>
      {children}
    </UserInfoSignUpContext.Provider>
  );
};

export default UserInfoSignUpDataContext;
