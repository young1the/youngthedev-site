import { User } from "firebase/auth";
import LoginButtonContainer from "./LoginButtonContainer";
import style from "./LoginModal.module.css";

export interface LoginModalProps {
  user: User | undefined;
  parentModalOff: VoidFunction;
}

const LoginModal = (props: LoginModalProps) => {
  return (
    <div className={style.wrapper}>
      <LoginButtonContainer {...props} />
    </div>
  );
};

export default LoginModal;
