import {
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const loginGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Giriş Yap</h1>
      <button onClick={loginGoogle}>Google İle Giriş Yap</button>
    </div>
  );
};

export default SignIn;
