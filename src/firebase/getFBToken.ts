import firebase from "./config";
import { getAuth, getIdToken } from "firebase/auth";

const auth = getAuth(firebase);

export default async function getFBToken() {
  try {
    let token;
    if (auth.currentUser) token = await getIdToken(auth?.currentUser);

    // console.log(token);
    return token;
  } catch (error) {
    return null;
  }
}
