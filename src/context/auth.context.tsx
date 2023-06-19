import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import firebase from "../firebase/config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import ROUTES from "../settings/ROUTES";
import CustomToast from "../components/CustomToast/CustomToast";

interface ValuesType {
  user: any;
  isLoggedIn: boolean;
  isCheckingAuth: boolean;
  signInWithEmail: (email: string, password: string, navigate: any) => void;
  logOut: (navigate: any) => void;
}

// create context
export const authContext = React.createContext<ValuesType | undefined>(
  undefined
);
authContext.displayName = "reemRose Context";

// consumer logic
export const useAuth = () => {
  const context = React.useContext(authContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

// provider logic
export const AuthProvider = (props: any) => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  const auth = getAuth(firebase);

  const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        setIsCheckingAuth(false);
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setIsCheckingAuth(false);
      }
    });
  };

  // main useEffect.
  useEffect(() => {
    checkAuthState();
    return () => {
      setIsCheckingAuth(true);
      setIsLoggedIn(true);
      setUser(null);
    };
  }, []);

  const signInWithEmail = (email: string, password: string, navigate: any) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate(ROUTES.ADMIN_HOME);
      })
      .catch((error) => {
        var errorMessage = error.message;
        if (errorMessage.includes("wrong-password")) {
          toast(<CustomToast message={"Invalid Email / Password"} />);
        } else if (errorMessage.includes("user-not-found")) {
          toast(<CustomToast message={"Invalid Email: User not found"} />);
        }
        console.log(errorMessage);
      });
  };

  const logOut = (navigate: any) => {
    signOut(auth)
      .then(() => {
        navigate(ROUTES.ADMIN_HOME + ROUTES.LOGIN);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const value = React.useMemo(
    () => ({
      user,
      isLoggedIn,
      isCheckingAuth,
      signInWithEmail,
      logOut,
    }),
    [user, isLoggedIn, isCheckingAuth]
  );
  return <authContext.Provider value={value} {...props} />;
};
