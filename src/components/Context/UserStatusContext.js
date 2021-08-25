import React, { useState, createContext } from "react";

export const UserStatusContext = createContext();

export const UserStatusContextProvider = (props) => {
  const [userLogged, setUserLogged] = useState(false);

  return (
    <UserStatusContext.Provider value={[userLogged, setUserLogged]}>
      {props.children}
    </UserStatusContext.Provider>
  );
};
