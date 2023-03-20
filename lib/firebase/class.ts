import * as FireBaseApp from "firebase/app";
import * as FireBaseAuth from "firebase/auth";
import * as FireBaseDatabase from "firebase/database";
import { FirebaseConfig } from "./types";

export class FirebaseWorker {
  private config: FirebaseConfig;
  private app: FireBaseApp.FirebaseApp;
  private googleProvider: FireBaseAuth.GoogleAuthProvider;
  private auth: FireBaseAuth.Auth;
  private database: FireBaseDatabase.Database;

  constructor(initConfig: FirebaseConfig) {
    this.config = { ...initConfig };
    this.app = FireBaseApp.initializeApp(this.config);
    this.googleProvider = new FireBaseAuth.GoogleAuthProvider();
    this.auth = FireBaseAuth.getAuth();
    this.database = FireBaseDatabase.getDatabase();
  }

  test() {
    console.log(this.auth.currentUser);
  }

  async signInAnonny() {
    const result = await FireBaseAuth.signInAnonymously(this.auth);
    const user = result.user;
    return user;
  }

  async goggleSignInWithPopup(): Promise<FireBaseAuth.User | null> {
    try {
      const result = await FireBaseAuth.signInWithPopup(
        this.auth,
        this.googleProvider
      );
      const credential =
        FireBaseAuth.GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log(user);
      return user;
    } catch (error) {
      console.log("GoogleSignInError", error);
      return null;
    }
  }

  async signOutFromSite(): Promise<boolean> {
    const auth = FireBaseAuth.getAuth();
    try {
      await FireBaseAuth.signOut(this.auth);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  onRealTimeDataBase(callback: any) {
    console.log("onvalue called");
    return FireBaseDatabase.onValue(
      FireBaseDatabase.ref(this.database, "/tracks/track1/comments"),
      (snapshot) => {
        const data = snapshot.val();
        const string = new String("안녕");
        console.log("getValue");
        callback(string);
      }
    );
  }

  offRealTimeDataBase() {
    FireBaseDatabase.off(
      FireBaseDatabase.ref(this.database, "/tracks/track1/comments"),
      "value"
    );
  }

  postData() {
    FireBaseDatabase.push(
      FireBaseDatabase.ref(this.database, "/tracks/track1/comments"),
      {
        comment: "hello",
        time: 10,
        uid: this.auth.currentUser?.uid,
      }
    );
  }

  deleteData() {
    FireBaseDatabase.remove(
      FireBaseDatabase.ref(
        this.database,
        "/tracks/track1/comments/-NQU_tBQypVLzsJli7j4"
      )
    );
  }
}
