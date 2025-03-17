import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const intl = useIntl();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 5 || password.length > 8) {
        setError('La contraseña debe tener entre 5 y 8 caracteres');
        return;
      }
    navigate('/home');
  };

  return (
    <div className="login-container">
      {/* Columna izquierda */}
      <div className="login-left">
        <img src="/bg-login.jpg" alt="Login Background" className="login-image" />
        <h1 className="logo-text">
          <FormattedMessage id="login.slogan1" />
        </h1>
        <p className="subtitle">
          <FormattedMessage id="login.slogan2" />
        </p>
      </div>

      {/* Columna derecha */}
      <div className="login-right">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <h2><FormattedMessage id="login.title" /></h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="input-container">
              <input
                type="string"
                placeholder={intl.formatMessage({ id: "login.username" })}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder={intl.formatMessage({ id: "login.password" })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className="forgot-password">
              <FormattedMessage id="login.forgotPassword" />
            </p>
            <button type="submit" className="login-button">
              <FormattedMessage id="login.button" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;