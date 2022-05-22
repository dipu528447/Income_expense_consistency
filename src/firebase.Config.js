import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDIiYMMEP177IJLAH8wS_Gzrq7Os_4bftc",
  authDomain: "income-expense-5290c.firebaseapp.com",
  projectId: "income-expense-5290c",
  storageBucket: "income-expense-5290c.appspot.com",
  messagingSenderId: "698018174414",
  appId: "1:698018174414:web:83730bdd8b0cdd9c47079f"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default firebaseConfig;
