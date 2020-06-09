import Firebase from "./firebase";
import {
  useAuth,
  useFirebase,
  useSession,
  userContext,
  firebaseContext,
} from "./context";

let fb;

export default (function () {
  if (!fb) {
    fb = new Firebase();
    return fb;
  }
  return fb;
})();

export {
  Firebase,
  useAuth,
  useFirebase,
  useSession,
  userContext,
  firebaseContext,
};
