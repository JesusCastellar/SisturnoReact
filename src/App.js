import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';

function App() {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const [registroData, setRegistroData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: ''
  });

  const toggleRegistro = () => {
    setMostrarRegistro(prev => !prev);
  };

  const handleChange = (e) => {
    setRegistroData({ ...registroData, [e.target.name]: e.target.value });
  };

  const handleRegistro = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registroData.email,
        registroData.password
      );
      console.log("Usuario registrado:", userCredential.user);
      alert("¡Registro exitoso!");
    } catch (error) {
      console.error("Error al registrar:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="form-container">
      <div className="Login">
        <h2>Iniciar Sesión</h2>
        <input type='email' placeholder='Ingresa tu correo electrónico' />
        <input type='password' placeholder='Ingresa tu contraseña' />
        <button type='submit'>Ingresar</button>

        <h2 onClick={toggleRegistro} style={{ cursor: 'pointer' }}>
          Registro {mostrarRegistro ? '▲' : '▼'}
        </h2>

        <div className={`registro-form ${mostrarRegistro ? 'mostrar' : ''}`}>
          <input name='nombre' type='text' placeholder='Ingresa tu nombre' onChange={handleChange} />
          <input name='apellidos' type='text' placeholder='Ingresa tus apellidos' onChange={handleChange} />
          <input name='email' type='email' placeholder='Ingresa tu correo electrónico' onChange={handleChange} />
          <input name='password' type='password' placeholder='Ingresa tu contraseña' onChange={handleChange} />
          <button type='button' onClick={handleRegistro}>Registrar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
