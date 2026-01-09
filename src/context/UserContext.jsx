import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext(null);

// Custom hook
export const useUser = () => useContext(UserContext);

export const UserProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(null);

  // Load user from localStorage on refresh
  useEffect(() => {
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    if (username) {
      setUser({ username, role });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
