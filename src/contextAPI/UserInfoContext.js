import React, {createContext, useState} from 'react';
export const UserInfoContext = createContext({
  userInfoData: "",
  setUserInfoData: () => null,
});
const UserInfoDataContext = ({children}) => {
  const [userInfoData, setUserInfoData] = useState(null);
  return (
    <UserInfoContext.Provider
      value={{
        userInfoData,
        setUserInfoData: value => setUserInfoData(value),
      }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoDataContext;
