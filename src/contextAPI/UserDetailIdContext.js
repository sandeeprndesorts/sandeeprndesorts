import React, {createContext, useState} from 'react';
export const UserIdContext = createContext({
  UserDetailId: '',
  setUserDetailId: () => null,
});
const UserDetailIdContext = ({children}) => {
  const [userDetailId, setUserDetailId] = useState(null);
  return (
    <UserIdContext.Provider
      value={{
        userDetailId,
        setUserDetailId: value => setUserDetailId(value),
      }}>
      {children}
    </UserIdContext.Provider>
  );
};

export default UserDetailIdContext;
