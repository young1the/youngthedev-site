import Spinner from "@/components/contents/Spinner/Spinner";
import { firebase } from "@/lib/firebase";
import { ModalBackDrop, useModal } from "@/lib/modal";
import { LoginModalProps } from "./LoginModal";

const LoginButtonContainer = (props: LoginModalProps) => {
  const { parentModalOff, user } = props;
  const { state, on, off } = useModal();
  const LoginHandler = async (signWith: string) => {
    on();
    try {
      if (signWith === "google") await firebase.goggleSignInWithPopup();
      else if (signWith === "anony") await firebase.signInAnonny();
      else if (signWith === "out") await firebase.signOutFromSite();
      parentModalOff();
    } catch {
      off();
    }
  };

  const buttons = {
    google: (
      <button
        onClick={() => {
          LoginHandler("google");
        }}
      >
        구글로그인
      </button>
    ),
    anony: (
      <button
        onClick={() => {
          LoginHandler("anony");
        }}
      >
        익명로그인
      </button>
    ),
    out: (
      <button
        onClick={() => {
          LoginHandler("out");
        }}
      >
        로그아웃
      </button>
    ),
  };
  return (
    <>
      <div>
        {user ? (
          buttons["out"]
        ) : (
          <>
            {buttons["google"]}
            {buttons["anony"]}
          </>
        )}
      </div>
      <ModalBackDrop state={state} opacity={0}>
        <Spinner />
      </ModalBackDrop>
    </>
  );
};

export default LoginButtonContainer;
