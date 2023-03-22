import { User } from "@firebase/auth";
import { useEffect, useState } from "react";
import { firebase } from ".";

export function useFirebaseRealTimeDataBase<T>() {
  const [data, setData] = useState<T>();
  useEffect(() => {
    firebase.onRealTimeDataBase(setData);
    return () => {
      firebase.offRealTimeDataBase();
    };
  }, []);
  return { data };
}

export function useFirebaseOnAuthChange() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const offAuthChange = firebase.onAuthStateChanged(setUser);
    return () => {
      offAuthChange();
    };
  }, []);
  return { user };
}
