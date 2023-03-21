import * as FirebaseApp from "firebase/app";
import * as FirebaseAuth from "firebase/auth";
import * as FirebaseDatabase from "firebase/database";
import { FirebaseConfig } from "./types";

export class FirebaseWorker {
  private config: FirebaseConfig;
  private app: FirebaseApp.FirebaseApp;
  private googleProvider: FirebaseAuth.GoogleAuthProvider;
  private auth: FirebaseAuth.Auth;
  private database: FirebaseDatabase.Database;

  constructor(initConfig: FirebaseConfig) {
    this.config = { ...initConfig };
    this.app = FirebaseApp.initializeApp(this.config);
    this.googleProvider = new FirebaseAuth.GoogleAuthProvider();
    this.auth = FirebaseAuth.getAuth();
    this.database = FirebaseDatabase.getDatabase();
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }

  onAuthChange(callback: any) {
    return this.auth.onAuthStateChanged((user: FirebaseAuth.User | null) => {
      console.log(user);
      if (!user) {
        callback("로그아웃");
        return;
      }
      const displayName = user?.displayName ?? "익명";
      callback(displayName);
    });
  }

  async signInAnonny() {
    const result = await FirebaseAuth.signInAnonymously(this.auth);
  }

  async goggleSignInWithPopup(): Promise<FirebaseAuth.User | null> {
    try {
      const result = await FirebaseAuth.signInWithPopup(
        this.auth,
        this.googleProvider
      );
      const credential =
        FirebaseAuth.GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      return user;
    } catch (error) {
      console.log("GoogleSignInError", error);
      return null;
    }
  }

  async signOutFromSite(): Promise<boolean> {
    const auth = FirebaseAuth.getAuth();
    try {
      await FirebaseAuth.signOut(this.auth);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  onRealTimeDataBase(callback: any) {
    console.log("onvalue called");
    return FirebaseDatabase.onValue(
      FirebaseDatabase.ref(this.database, "/tracks/track1/comments"),
      (snapshot) => {
        const data = snapshot.val();
        const string = new String("안녕");
        console.log("getValue");
        callback(string);
      }
    );
  }

  offRealTimeDataBase() {
    FirebaseDatabase.off(
      FirebaseDatabase.ref(this.database, "/tracks/track1/comments"),
      "value"
    );
  }

  postData() {
    FirebaseDatabase.push(
      FirebaseDatabase.ref(this.database, "/tracks/track1/comments"),
      {
        comment: "hello",
        time: 10,
        uid: this.auth.currentUser?.uid,
      }
    );
  }

  deleteData() {
    FirebaseDatabase.remove(
      FirebaseDatabase.ref(
        this.database,
        "/tracks/track1/comments/-NQU_tBQypVLzsJli7j4"
      )
    );
  }
}
