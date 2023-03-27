import * as FirebaseApp from "firebase/app";
import * as FirebaseAuth from "firebase/auth";
import * as FirebaseDatabase from "firebase/database";
import { FirebaseConfig, PostDataPayload } from "./types";

export class FirebaseWorker {
  private config: FirebaseConfig;
  private app: FirebaseApp.FirebaseApp;
  private database: FirebaseDatabase.Database;

  constructor(initConfig: FirebaseConfig) {
    this.config = { ...initConfig };
    this.app = FirebaseApp.initializeApp(this.config);
    this.database = FirebaseDatabase.getDatabase();
  }

  getCurrentUser() {
    return FirebaseAuth.getAuth().currentUser?.uid;
  }

  onAuthStateChanged(callback: any) {
    return FirebaseAuth.getAuth().onAuthStateChanged(
      (user: FirebaseAuth.User | null) => {
        callback(user);
      }
    );
  }

  async signInAnonny(): Promise<string> {
    try {
      const result = await FirebaseAuth.signInAnonymously(
        FirebaseAuth.getAuth()
      );
      return "익명로그인에 성공했습니다.";
    } catch {
      throw new Error("익명로그인에 실패했습니다.");
    }
  }

  async goggleSignInWithPopup(): Promise<string> {
    const googleProvider = new FirebaseAuth.GoogleAuthProvider();
    try {
      const result = await FirebaseAuth.signInWithPopup(
        FirebaseAuth.getAuth(),
        googleProvider
      );
      FirebaseAuth.GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      return `${user.displayName}님 안녕하세요!`;
    } catch (error: any) {
      FirebaseAuth.GoogleAuthProvider.credentialFromError(error);
      throw new Error("구글로그인에 실패했습니다.");
    }
  }

  async signOutFromSite(): Promise<string> {
    const auth = FirebaseAuth.getAuth();
    try {
      await FirebaseAuth.signOut(FirebaseAuth.getAuth());
      return "로그아웃에 성공했습니다.";
    } catch {
      return "로그아웃에 실패했습니다.";
    }
  }

  onRealTimeDataBase(callback: any) {
    FirebaseDatabase.onValue(
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

  async postData(payload: PostDataPayload) {
    const { titleIndex, comment, time } = payload;
    await FirebaseDatabase.push(
      FirebaseDatabase.ref(this.database, `/tracks/${titleIndex}/comments`),
      {
        comment,
        time,
        uid: FirebaseAuth.getAuth().currentUser?.uid,
        displayName: FirebaseAuth.getAuth().currentUser?.displayName ?? "익명",
      }
    );
  }

  deleteData(payload: { id: string; titleIndex: number }) {
    const { id, titleIndex } = payload;
    FirebaseDatabase.remove(
      FirebaseDatabase.ref(
        this.database,
        `/tracks/${titleIndex}/comments/${id}`
      )
    );
  }
}
