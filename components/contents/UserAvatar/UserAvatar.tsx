import { User } from "firebase/auth";
import style from "./UserAvatar.module.css";

interface UserAvatarProps {
  loginPopUpOn: VoidFunction;
  user: User | undefined;
}

const UserAvatar = (props: UserAvatarProps) => {
  const { loginPopUpOn, user } = props;
  const userState = !user ? "guest" : !user.photoURL ? "hamster" : "user";
  return (
    <div onClick={loginPopUpOn}>
      {userState === "user" ? (
        <img
          className={style.avatar}
          src={user?.photoURL as string}
          alt="user avatar"
        />
      ) : userState === "guest" ? (
        <img
          className={style.login}
          style={{ background: "white" }}
          src="./login.svg"
          alt="need Login"
        />
      ) : (
        <div className={style.avatar}>🐹</div>
      )}
    </div>
  );
};

export default UserAvatar;
