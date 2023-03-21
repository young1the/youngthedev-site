import { FirebaseWorker } from "./class";
import { firebaseConfig } from "./config";

export const firebase = new FirebaseWorker(firebaseConfig);
