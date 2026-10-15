import React from "react";
import "./Register.css";
import { Link } from "react-router";
import { Button } from "../../components/atoms/Button";
import Input from "../../components/atoms/TextInput";

const Register = () => {
  return (
    <>
      <div className="register-page">
        <div className="header-register">
          <h2>VELVETIQUE</h2>
          <h3>Create your acount</h3>
          <h4>JOIN OUR BEAUTY COMMUNITY</h4>
          <p>Sign up today and enjoy</p>
          <p>exclusive offers,early access</p>
          <p>to new collections and a</p>
          <p>personalized beauty experience.</p>
        </div>

        <div className="box">
          <h2>Register</h2>
          <p>Rellena los datos a continuación para crear tu cuenta.</p>
          <form className="register-form">
            <div>
              <Input
                id="register-name"
                name="name"
                label="Nombre Completo"
                placeholder="nombre"
                icon="bi-person"
                autoComplete="name"
                required
              />

              <Input
                id="register-email"
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
                id="register-password"
                name="password"
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                icon="bi-lock"
                autoComplete="new-password"
                minLength={8}
                required
              />

              <Input
                id="register-confirm-password"
                name="confirmPassword"
                label="Confirma tu contraseña"
                type="password"
                placeholder="Confirma tu contraseña"
                icon="bi-lock"
                autoComplete="new-password"
                required
              />
            </div>
          </form>
          <div className="terms">
            <input type="checkbox" />
            <p>
              I agree to the <a href="#">Terms&Conditons </a> and
              <a href="#"> Privacy&Policy.</a>
            </p>
            <div>
              <Button variant="primary">CREAR UNA CUENTA</Button>
            </div>
          </div>
          <span>
            Already have an account <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
