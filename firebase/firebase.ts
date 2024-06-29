import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkYF4SDR9_toPvI25e428xYCv9SGOZqxU",
  authDomain: "send-book.firebaseapp.com",
  projectId: "send-book",
  storageBucket: "send-book.appspot.com",
  messagingSenderId: "997227316894",
  appId: "1:997227316894:web:46363441aa92b72dbedd8f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // app에 대한 인증 서비스를 사용
export const storage = getStorage(app);
export const db = getFirestore(app);
