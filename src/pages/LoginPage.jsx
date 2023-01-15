import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState();

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="ms-2 mt-2">
      <h1>Login</h1>

      <form className="row g-3 mt-4" onSubmit={login}>
        <div className="col-auto ">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail2"
            value={"Nombre de usuario"}
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
