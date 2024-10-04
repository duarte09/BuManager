import React from "react";
import * as Components from "./Login.components";
import "./Login.styles.css";

const Login = () => {
  const [signIn, toggle] = React.useState(true);

  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Crie sua conta</Components.Title>
          <Components.Input type="text" placeholder="Nome" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Senha" />
          <Components.Button>Inscreva-se</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Login</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Senha" />
          <Components.Anchor href="#">Esqueceu sua senha?</Components.Anchor>
          <Components.Button>Entrar</Components.Button>
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
              Então crie sua conta, para gerenciar e ficar por dentro de tudo
              que acontece na sua bateria!
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
