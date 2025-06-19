import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN5WI7pBguIzl39GM3Qe_eS5DJc6URGiQ",
  authDomain: "agendamento-7c7d7.firebaseapp.com",
  projectId: "agendamento-7c7d7",
  storageBucket: "agendamento-7c7d7.firebasestorage.app",
  messagingSenderId: "827742797379",
  appId: "1:827742797379:web:c10a80af3370b67a591ef6",
  measurementId: "G-SRRRCD9S47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// opcional: definir persistência (localStorage)
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Erro ao configurar persistência:", error);
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const getGoogleRedirectResult = () => getRedirectResult(auth);

export { auth, provider };
