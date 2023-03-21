import * as FirebaseApp from "firebase/app";
import * as FirebaseAuth from "firebase/auth";
import * as FirebaseDatabase from "firebase/database";
import { FirebaseConfig, PostDataPayload } from "./types";

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
    return FirebaseDatabase.onValue(
      FirebaseDatabase.ref(this.database, "/tracks"),
      (snapshot) => {
        const data = snapshot.val();
        callback(data);
      }
    );
  }

  offRealTimeDataBase() {
    FirebaseDatabase.off(
      FirebaseDatabase.ref(this.database, "/tracks"),
      "value"
    );
  }

  postData(payload: PostDataPayload) {
    const { title, comment, time } = payload;
    FirebaseDatabase.push(
      FirebaseDatabase.ref(this.database, `/tracks/${title}/comments`),
      {
        comment,
        time,
        uid: this.auth.currentUser?.uid,
        displayName: this.auth.currentUser?.displayName ?? "익명",
      }
    );
  }

  deleteData(payload: any) {
    const { id, title } = payload;
    FirebaseDatabase.remove(
      FirebaseDatabase.ref(this.database, `/tracks/${title}/comments/${id}`)
    );
  }
}
