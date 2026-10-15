import React from "react";

import "./Login.scss";
import { Link } from "react-router";
import { Button } from "../../components/atoms/Button";
import Input from "../../components/atoms/TextInput";

const Login = () => {
  return (
    <div className="login-page">
      <div className="register">
        <div className="login-header">
          <h2>VELVETIQUE</h2>
          <h3>Welcome Back</h3>
          <h4>BEAUTY BEGINS WITH YOU</h4>
          <p>Log in your account and continue</p>
          <p>your beauty journey with exclusive</p>
          <p>offers,new arrivals, and more.</p>
        </div>

        <div className="box-login">
          <h2>Log In</h2>
          <p>Introduce tus datos para acceder a tu cuenta.</p>
          <form className="register-form" id="login-form">
            <div>
              <Input
                id="login-email"
                name="email"
                label="Email"
                type="email"
                placeholder="nombre@gmail.com"
                icon="bi-envelope"
                autoComplete="email"
                inputMode="email"
                required
              />

              <Input
                id="login-password"
                name="password"
                label="Contraseña"
                type="password"
                placeholder="Ingresa tu contraseña"
                icon="bi-lock"
                autoComplete="current-password"
                required
              />
            </div>
          </form>
          <div className="terms">
            <div className="check">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <div>
              <Button variant="primary">Log in</Button>
            </div>
          </div>
          <span>
            Don't have an account
            <Link to="/register"> Sign up</Link>
          </span>
          <span>
            <Link to="/"> Back Home</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
