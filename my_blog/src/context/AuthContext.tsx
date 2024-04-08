import { ReactMode, createContext, useState } from "react";
import { User, getAuth } from "firebase/auth";
import { app } from "firebaseApp";
interface AuthProps {
  children: ReactMode;
}

const AuthContext = createContext({
  user: null as User | null,
});

export const AuthContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
};
