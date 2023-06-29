/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

import "./sign-in.scss";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import Button from "../shared/button/button";
import FormInput from "../shared/form-input/form-input";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("yanlış şifre");
          break;

        case "auth/user-not-found":
          alert("kullanıcı bulunumadı");
          break;

        default:
          console.log(error);
          break;
      }
    }
  };

  const loginGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h1 className="sign-in-title">Giriş Yap</h1>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <FormInput
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email Giriniz"
        />

        <FormInput
          label="Şifre"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Şifre Giriniz"
        />

        <div className="buttons-container">
          <Button type="submit">Giriş Yap</Button>
          <Button type="button" onClick={loginGoogle} buttonType="google">
            Google İle Giriş Yap
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
