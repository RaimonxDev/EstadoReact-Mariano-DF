/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from './Alert';

const Formulario = () => {

  const FIELD_IS_NAME_REQUIRED = 'El nombre es requerido';
  const FIELD_IS_EMAIL_REQUIRED = 'El email es requerido';
  const FIELD_IS_PASS_REQUIRED = 'El password es requerido';
  
  const FIELD_IS_EMAIL_INVALID = 'El email no es válido';
  const PASS_NOT_MATCH = 'Las contraseñas no coinciden';

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isSamePass, setIsSamePass] = useState(false);

  const [errors, setErrors] = useState([]);

  // ESTO ES SOLO PRUEBA 
  const handleControl = (e) => {
    console.log('INPUT =>', e.target.value)
    const { value } = e.target

    if (!value) {
      setErrors([...errors, FIELD_IS_NAME_REQUIRED])
      return;
    }     
    setNombre(value)
    setErrors([])
  }

  const submit = (e) => {
    console.log('call submit')
    e.preventDefault();
    if (!nombre) {
      console.log('falta el nombre')
      setErrors([...errors, FIELD_IS_NAME_REQUIRED]);
    }
    // Porque aqui no setea el error? 
    console.log('Aqui ya pasamos la validacion del nambre y este es el estado del error =>',errors)
    
    if (email === '') {
      console.log('falta el email')
      setErrors([...errors, FIELD_IS_EMAIL_REQUIRED]);
    }
    // if (!emailRegex.test(email)) {
    //   setErrors([...errors, FIELD_IS_EMAIL_INVALID]);
    // }
    // if (pass === '') {
    //   setErrors([...errors, FIELD_IS_PASS_REQUIRED]);
    // }
    // if (!isSamePass) {
    //   setErrors([...errors, PASS_NOT_MATCH]);
    // }
  }

    console.log(errors)
   
    return (
      <div>
        <Form onSubmit={submit} >
          <Form.Control className="mb-3"
            type="text"
            name="firstName"
            placeholder="Nombre"
            // onChange={e => setNombre(e.target.value)}
            // onChange={handleControl}
          />
          <Form.Group >
            <Form.Control className="mb-3"
              type="email"
              name="email"
              placeholder="tuemail@ejemplo.com"
              // onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control className="mb-3"
              type="password"
              name="password"
              placeholder="Contraseña"
              // onChange={e => setPass(e.target.value)}
            />
            <Form.Control className="mb-3"
              type="password"
              name="confirmPassword"
              placeholder="Confirma tu contraseña"
              // onChange={e => setIsSamePass(e.target.value === pass)}
            />
          </Form.Group>
          <Button type='submit' variant="success" className='w-100 mb-2'>
            Registrarse
          </Button>
      
        </Form>
      </div>
    );
  };

export default Formulario;
