import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/main-logo.svg';
import WelcomeText from '../../components/WelcomeText';
import LoginForm from '../../containers/LoginForm';


export default function LoginPage (): JSX.Element {
    return (
      <div className="login">
        <img src={Logo} className="logo" alt="BookMooch Go logo"/>
        <div className="welcome-text-wrapper">
          <WelcomeText back={true} />
        </div>
        <div className="login-form-wrapper">
          <LoginForm />
        </div>
        <p className="footerLogin">
          Don't have an account yet? Learn more <Link to="/about">here</Link>
        </p>
    </div>
  )
}