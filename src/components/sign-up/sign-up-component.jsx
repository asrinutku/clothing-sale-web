/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

import "./sign-up.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "../shared/button/button";
import FormInput from "../shared/form-input/form-input";
import { useState } from "react";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      alert("Şifreler uyumlu değil");
    } else if (email && password) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        const res = await createUserDocumentFromAuth(user, { displayName });

        if (res) {
          alert("kayıt başarılı !");
        }
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("email kullanımda");
        } else {
          console.log("user creation error", error);
        }
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h1 className="sign-up-title">Email ve Şifreniz ile Kayıt Olun</h1>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          label="İsim"
          type="text"
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />

        <FormInput
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <FormInput
          label="Şifre"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <FormInput
          label="Şifre Doğrulama"
          type="password"
          id="confirm-password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <Button type="submit">Hesap Oluştur</Button>
      </form>
    </div>
  );
};

export default SignUp;
