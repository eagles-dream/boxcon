/* import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from './firebase'

class Google {
  logIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  logOut = () => {
    const auth = getAuth();
    
    signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  }
}

export default Google; */