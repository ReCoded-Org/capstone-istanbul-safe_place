import * as firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: atob("QUl6YVN5Q193X2tONE9uSWxROVl4VXQ0Q25DZkF6TnFQWVNXbDlF"),
  authDomain: "capstone-project-safe-place.firebaseapp.com",
  databaseURL: "https://capstone-project-safe-place.firebaseio.com",
  projectId: "capstone-project-safe-place",
  storageBucket: "capstone-project-safe-place.appspot.com",
  messagingSenderId: "890074802752",
  appId: "1:890074802752:web:049078f0001d5e82320da5",
  measurementId: "G-0QGEDPHXEF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
