import React from "react";
import { useAuth } from "../hooks/auth";

const LogoutPage = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <div className="ms-2 mt-2">
      <h1>Logout</h1>

      <form className="row g-3 mt-4" onSubmit={logout}>
        <div className="col-auto ">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail2"
            value={"¿Confirma que desea salir?"}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Salir
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogoutPage;
