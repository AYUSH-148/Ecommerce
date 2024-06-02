import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIoUU2WvGP6asd9G_6hRSydU_NWr6SeR8",
  authDomain: "ecommerce-736cf.firebaseapp.com",
  projectId: "ecommerce-736cf",
  storageBucket: "ecommerce-736cf.appspot.com",
  messagingSenderId: "853302557598",
  appId: "1:853302557598:web:3986542d60c40b4bcc348f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const storage =getStorage(app)
