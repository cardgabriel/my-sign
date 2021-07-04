import { createContext, useContext, useState, useEffect } from "react";
import firebase from "firebase";
import { FC } from "react";

// CONFIG FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyCG1U6szTkFcyk8PIqBkid16Ui2cKjn63k",
  authDomain: "my-sign-firebase.firebaseapp.com",
  projectId: "my-sign-firebase",
  storageBucket: "my-sign-firebase.appspot.com",
  messagingSenderId: "403541829141",
  appId: "1:403541829141:web:777eff2ba6317fc825901c",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const gmailProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const loginSocial = {
  google: gmailProvider,
};
const data = {
  firebase,
  db,
};

//CONTEXT
const AuthContext = createContext<any>(null);

export function useAuth(): {
  currentUser: any;
  signup: (email: string, password: string) => any;
  logIn: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  googleLogIn: () => Promise<firebase.auth.UserCredential>;
  signInAsync: () => Promise<void>;
  storeFirstMood: (userId: string, firstMood: string) => void;
  getFirstMood: (userId: string) => string;
} {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string): any {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logIn(email: string, password: string): any {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        setCurrentUser({
          email: email,
        })
      )
      .catch((e) => console.log(e));
  }

  function resetPassword(email: string): Promise<void> {
    return auth.sendPasswordResetEmail(email);
  }

  function googleLogIn(): Promise<firebase.auth.UserCredential> {
    return data.firebase.auth().signInWithPopup(loginSocial.google);
  }

  function logout(): Promise<void> {
    return auth.signOut();
  }

  function storeFirstMood(userId: string, firstMood: string): void {
    if (firstMood) {
      data.firebase
        .database()
        .ref("users/" + userId)
        .set({
          firstMood: firstMood,
        });
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({
          email: user.displayName,
        });
        setLoading(false);
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    logIn,
    logout,
    resetPassword,
    googleLogIn,
    storeFirstMood,
  };

  useEffect(() => {
    console.log("USER", currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
