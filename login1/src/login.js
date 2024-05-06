import React from 'react';
import './styles.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form action="login.php" method="POST">
        <div className="input-group">
          <input type="text" id="username" name="username" required />
          <label htmlFor="username">Usuario</label>
        </div>
        <div className="input-group">
          <input type="password" id="password" name="password" required />
          <label htmlFor="password">Contraseña</label>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div className="bottom-text">
        <p>¿No tienes una cuenta? <a href="registro.html">Regístrate aquí</a></p>
      </div>
    </div>
  );
}

export default Login;
