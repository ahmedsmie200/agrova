import { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("agrova_user");
    return stored ? JSON.parse(stored) : null;
  });

  const isAuthenticated = !!user;

  const login = useCallback((userData = { name: "Farmer", email: "farmer@agrova.com" }) => {
    setUser(userData);
    localStorage.setItem("agrova_user", JSON.stringify(userData));
    localStorage.setItem("isAuthenticated", "true");
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("agrova_user");
    localStorage.removeItem("isAuthenticated");
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
