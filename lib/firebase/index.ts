import { FirebaseWorker } from "./class";
import { firebaseConfig } from "./config";
import { useFirebaseOnAuthChange, useFirebaseRealTimeDataBase } from "./hooks";

export const firebase = new FirebaseWorker(firebaseConfig);
export { useFirebaseOnAuthChange, useFirebaseRealTimeDataBase };
