import React, { useState } from "react";
import * as Components from "./Login.components";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserMail, setNewUserMail] = useState("");
  const [newUserPhone, setNewUserPhone] = useState("");
  const [newUserPass, setNewUserPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [signIn, setSignIn] = useState(true);

  const auth = getAuth();

  const userLogin = () => {
    if (!userMail || !userPass) {
      alert("Preencha todos os campos!");
      return;
    }

    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Login realizado com sucesso! Bem-vindo, ${user.email}`);
      })
      .catch((error) => {
        alert("Erro ao fazer login: " + error.message);
      });
  };

  const userRegister = () => {
    if (
      !newUserName ||
      !newUserMail ||
      !newUserPhone ||
      !newUserPass ||
      !confirmPass
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    if (newUserPass.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (newUserPass !== confirmPass) {
      alert("As senhas não coincidem.");
      return;
    }

    createUserWithEmailAndPassword(auth, newUserMail, newUserPass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Usuário cadastrado com sucesso! Bem-vindo, ${user.email}`);
        setSignIn(true);
      })
      .catch((error) => {
        alert("Erro ao cadastrar: " + error.message);
      });
  };

  const toggle = (isSignIn) => {
    setSignIn(isSignIn);
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Crie sua conta</Components.Title>
          <Components.Input
            type="text"
            placeholder="Nome completo"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            value={newUserMail}
            onChange={(e) => setNewUserMail(e.target.value)}
          />
          <Components.Input
            type="text"
            placeholder="Número de telefone"
            value={newUserPhone}
            onChange={(e) => setNewUserPhone(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Senha (mínimo 6 caracteres)"
            value={newUserPass}
            onChange={(e) => setNewUserPass(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <Components.Button onClick={userRegister}>
            Inscreva-se
          </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Login</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            value={userMail}
            onChange={(e) => setUserMail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Senha"
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
          />
          <Components.Anchor href="#">Esqueceu sua senha?</Components.Anchor>
          <Components.Button onClick={userLogin}>Entrar</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Bem vindo ao BuManager!</Components.Title>
            <Components.Paragraph>
              Já possui uma conta? Faça login!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Login
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Fala batuqueiro!</Components.Title>
            <Components.Paragraph>
              É novo por aqui?
              <br />
              <br />
              Então crie sua conta para gerenciar e ficar por dentro de tudo que
              acontece na sua bateria!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Registre-se
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default Login;
