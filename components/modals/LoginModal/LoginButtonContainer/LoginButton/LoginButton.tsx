import style from "./LoginButton.module.css";

interface LoginButtonProps {
  id: string;
  label: string;
  loginHandler: (id: string) => Promise<any>;
}

const LoginButton = (props: LoginButtonProps) => {
  const { id, label, loginHandler } = props;
  return (
    <button
      className={style.loginButton}
      onClick={() => {
        loginHandler(id);
      }}
    >
      <img
        className={style.logoImg}
        alt="login button"
        src={`./auth/${id}.svg`}
      ></img>
      <div>{label}</div>
    </button>
  );
};

export default LoginButton;
