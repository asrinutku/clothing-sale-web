import "./auth.scss";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const Auth = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
