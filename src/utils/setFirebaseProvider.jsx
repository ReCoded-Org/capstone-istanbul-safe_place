import firebase from "../firebaseConfig";

export function setFirebaseProvider(providerName) {
  let providerSet;
  switch (providerName) {
    case "google":
      providerSet = new firebase.auth.GoogleAuthProvider();
      break;
    case "facebook":
      providerSet = new firebase.auth.FacebookAuthProvider();
      break;
    case "twitter":
      providerSet = new firebase.auth.TwitterAuthProvider();
      break;
    default:
      throw new Error("provider not specified!");
  }

  return providerSet;
}

export default { setFirebaseProvider };
