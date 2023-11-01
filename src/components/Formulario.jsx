import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = () => {



  return (
    <div>
      
      <Form >
        <Form.Control className="mb-3"
          type="text"
          name="firstName"
          placeholder="Nombre"

          
        />
        <Form.Group >
          <Form.Control className="mb-3"
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"

          />
        </Form.Group>
        <Form.Group>
          <Form.Control className="mb-3"
            type="password"
            name="password"
            placeholder="Contraseña"
      
          />
          <Form.Control className="mb-3"
            type="password"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"
            
          />
                </Form.Group>
        <Button variant="success"  className='w-100 mb-2'>
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
