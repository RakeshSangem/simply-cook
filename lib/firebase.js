import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaRWZQ0qXQe2zsY5fkU2vQsN-apv-VQAE",
  authDomain: "simply-cook-33819.firebaseapp.com",
  projectId: "simply-cook-33819",
  storageBucket: "simply-cook-33819.appspot.com",
  messagingSenderId: "947844749561",
  appId: "1:947844749561:web:c537435b7367105d8d6a28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

// export const createUserDocumentFromAuth = async (user) => {
//   if (!user) return;

//   const userRef = collection(db, "users");

//   // const userRef = collection(db, "users", );

//   const snapshot = await getDocs(userRef);
//   console.log(snapshot);

//   console.log("user", user.uid);

//   if (snapshot.empty) {
//     const { displayName, email, photoURL } = user;
//     const createdAt = new Date();

//     try {
//       await setDoc(doc(userRef, user.uid), {
//         displayName,
//         email,
//         photoURL,
//         createdAt,
//       });
//     } catch (e) {
//       console.error("Error creating user document", e);
//     }
//   }
// };

export const createUserDocumentFromAuth = async (user) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (e) {
      console.error("Error creating user document", e);
    }
  }
};

export const addIngredientToUser = async (user, ingredient) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const userData = userDoc.data();
    const { ingredients } = userData;

    if (!ingredients) {
      try {
        await setDoc(userRef, { ingredients: [ingredient] }, { merge: true });
      } catch (e) {
        console.error("Error creating user document", e);
      }
    } else {
      const updatedIngredients = [...ingredients, ingredient];
      try {
        await setDoc(
          userRef,
          { ingredients: updatedIngredients },
          { merge: true }
        );
      } catch (e) {
        console.error("Error adding ingredient to user", e);
      }
    }
  }
};

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const signOutUser = async () => await auth.signOut();
