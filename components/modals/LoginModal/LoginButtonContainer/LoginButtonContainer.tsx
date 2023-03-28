import Spinner from "@/components/contents/Spinner/Spinner";
import style from "./LoginButtonContainer.module.css";
import { firebase } from "@/lib/firebase";
import { ModalBackDrop, useModal } from "@/lib/modal";
import { LoginModalProps } from "../LoginModal";
import LoginButton from "./LoginButton/LoginButton";
import { useCallback } from "react";

const LoginButtonContainer = (props: LoginModalProps) => {
  const { parentModalOff, user } = props;
  const { state, on, off } = useModal(true);
  const LoginHandler = useCallback(
    async (signWith: string) => {
      on();
      try {
        if (signWith === "google") await firebase.goggleSignInWithPopup();
        else if (signWith === "anony") await firebase.signInAnonny();
        else if (signWith === "logout") await firebase.signOutFromSite();
        parentModalOff();
      } catch {
      } finally {
        off();
      }
    },
    [on, off, parentModalOff]
  );

  return (
    <>
      <div className={style.wrapper}>
        {user ? (
          <LoginButton
            id={"logout"}
            label={"로그아웃"}
            loginHandler={LoginHandler}
          />
        ) : (
          <>
            <h1>로그인해서 피드백을 남겨주세요!</h1>
            <div className={style.container}>
              <LoginButton
                id={"google"}
                label={"구글 로그인"}
                loginHandler={LoginHandler}
              />
              <LoginButton
                id={"anony"}
                label={"익명 로그인"}
                loginHandler={LoginHandler}
              />
            </div>
          </>
        )}
      </div>
      <ModalBackDrop state={state}>
        <Spinner />
      </ModalBackDrop>
    </>
  );
};

export default LoginButtonContainer;
