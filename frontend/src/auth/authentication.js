import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const provider = new GoogleAuthProvider();

export const handleGooleLigin = () => {
  signInWithPopup(auth, provider)
    .then((result) => console.log(result.user))
    .catch((error) => console.log(error));
};

const FaceBookProvider = new FacebookAuthProvider();

export const handleFacebookLogin = () => {
  signInWithPopup(auth, FaceBookProvider)
    .then((result) => console.log(result.user))
    .catch((error) => console.log(error));
};
