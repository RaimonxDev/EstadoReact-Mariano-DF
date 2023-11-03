import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({error, setError}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validarDatos = (e) => {
    e.preventDefault();
    const { nombre, email, password, confirmPassword } = formData;
    const validarDatos = !nombre || !email || !password || !confirmPassword;
    const validarPassword = password !== confirmPassword;
  
    if (validarDatos) {
      setError({
        error: true,
        msg: 'Completa todos los campos',
        color: 'warning',
      });
    } else if (validarPassword) {
      setError({
        error: true,
        msg: 'Las contraseñas no coinciden',
        color: 'danger',
      });
    } else {
      setError({
        error: true,
        msg: 'Cuenta creada exitosamente',
        color: 'success',
      });
      setFormData({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form onSubmit={(e) => validarDatos(e)} style={{ width: '300px' }}>
        <Form.Control
          className="mb-3"
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={formData.nombre}
        />
        <Form.Group>
          <Form.Control
            className="mb-3"
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            onChange={handleChange}
            value={formData.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="mb-3"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            value={formData.password}
          />
        </Form.Group>
        <Form.Control
          className="mb-3"
          type="password"
          name="confirmPassword"
          placeholder="Confirma tu contraseña"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <Button type="submit" variant="success" className="w-100 mb-2">
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
