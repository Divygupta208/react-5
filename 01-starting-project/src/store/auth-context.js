import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password, enteredCollege) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoginInfo = localStorage.getItem("isLoggedIn");

    if (userLoginInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
