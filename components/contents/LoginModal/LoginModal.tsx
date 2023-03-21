import { firebase } from "@/lib/firebase";
import React from "react";
import style from "./LoginModal.module.css";

const LoginModal = () => {
  return (
    <div className={style.wrapper}>
      <h1>로그인해서 피드백을 남겨주세요</h1>
      <button
        onClick={() => {
          firebase.goggleSignInWithPopup();
        }}
      >
        구글로그인
      </button>
      <button
        onClick={() => {
          firebase.signInAnonny();
        }}
      >
        익명로그인
      </button>
      <button
        onClick={() => {
          firebase.signOutFromSite();
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default LoginModal;
