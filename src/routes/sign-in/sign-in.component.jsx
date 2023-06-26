import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up/sign-up-component";

const SignIn = () => {
  const loginGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Giriş Yap</h1>
      <button onClick={loginGoogle}>Google İle Giriş Yap</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
