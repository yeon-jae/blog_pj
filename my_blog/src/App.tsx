import { useState } from "react";
import { app } from "firebaseApp";
import { getAuth } from "firebase/auth"; //로그인유무 확인
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./components/Router";

function App() {
  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  return (
    <>
      <ToastContainer />
      <Router isAuthenticated={isAuthenticated} />;
    </>
  );
}
export default App;
