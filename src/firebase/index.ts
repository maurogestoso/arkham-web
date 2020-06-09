import Firebase from "./firebase";
import {
  useAuthentication,
  useFirebase,
  useSession,
  userContext,
  firebaseContext,
  useAuthorization,
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
  useAuthentication,
  useAuthorization,
  useFirebase,
  useSession,
  firebaseContext,
  userContext,
};
