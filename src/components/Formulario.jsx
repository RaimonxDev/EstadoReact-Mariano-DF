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

  const [ nombre, setNombre ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ pass, setPass ] = useState('');
  const [isSamePass, setIsSamePass] = useState(false);

  const [ errors, setErrors ] = useState({});


  const handleName = (e) => { 
    const { value } = e.target;
    setNombre(value);
    if (!value) {
      setErrors([...errors, FIELD_IS_NAME_REQUIRED ]);
      return;
    }
  };  

  const handleEmail = (e) => { 
    const { value } = e.target;
    setEmail(value);
    if (!value) {
      setErrors([...errors, FIELD_IS_EMAIL_REQUIRED ]);
      return;
    }
    if (!emailRegex.test(value)) { 
      setErrors([...errors, FIELD_IS_EMAIL_INVALID]);
      return;
    }
  };  

  const handlePassword = (e) => { 
    const { value } = e.target;
    setPass(value);
    if (!value) {
      setErrors([...errors, FIELD_IS_PASS_REQUIRED]);
      return;
    }
  }; 
  
  const handleRepeatPass = (e) => {
    const { value } = e.target;	
    if (!value) {
      setErrors([...errors, PASS_NOT_MATCH]);
      return
    }
    if (value !== pass) {
      setErrors([...errors, PASS_NOT_MATCH]);
    }
    if (errors.includes(PASS_NOT_MATCH)) {
      const newErrors = errors.filter((error) => error !== PASS_NOT_MATCH);
      setErrors(newErrors);
    }
    setIsSamePass(true);
  }

  const submit = (e) => {
    e.preventDefault();
    if (!nombre) { 
      alert('El nombre es requerido')
     }
    if (!email) {
    alert('El email es requerido')
    }
    if (!pass) {
    alert('El password es requerido')
    }
  }


  return (
    <div>
      <Form onSubmit={submit} >
        <Form.Control className="mb-3"
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={nombre}
          onChange={handleName}
        />
        <Form.Group >
          <Form.Control className="mb-3"
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            value={email}
            onChange={handleEmail}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control className="mb-3"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={pass}
            onChange={handlePassword}
          />
          <Form.Control className="mb-3"
            type="password"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"  
            onChange={handleRepeatPass}
          />
        </Form.Group>
          <Button type='submit' variant="success"  className='w-100 mb-2'>
            Registrarse
        </Button>
        

        {/* {errors.map(e => {
          <Alert message={`${e}<br>` } />
        } ) } */}
        </Form>
    </div>
  );
};

export default Formulario;
