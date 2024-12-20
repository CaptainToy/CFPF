import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDcJiJ88E9h14cHMmROlZQKhui6ifSVbI0",
  authDomain: "cttech-c3806.firebaseapp.com",
  databaseURL: "https://cttech-c3806-default-rtdb.firebaseio.com",
  projectId: "cttech-c3806",
  storageBucket: "cttech-c3806.appspot.com",
  messagingSenderId: "510121902173",
  appId: "1:510121902173:web:3dd4b71fe0386ab16f8db4",
  measurementId: "G-MBC0E5Q96G",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;
