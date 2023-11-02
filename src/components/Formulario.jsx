/* eslint-disable no-unused-vars */
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from './Alert';

const Formulario = () => {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [ nombre, setNombre ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ pass, setPass ] = useState('');
  
  const [isSamePass, setIsSamePass] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  
  const [toucheForm, setToucheForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [errors, setErrors] = useState(false);
  
  const submit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !pass || !isSamePass) {
      setShowAlert(true);
      setErrors(true)
      return;
    }
    if (!emailRegex.test(email)) {
      setShowAlert(true);
      setErrors(true)
      return;
    } else {
      setIsValidEmail(true)
    }
    if (!isSamePass) {
      setShowAlert(true);
      setErrors(true)
      setIsSamePass(false)
      return
    }

    resetState(e);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  const resetState = (event) => {
    event.target.reset();
    setEmail('');
    setNombre('');
    setPass('');
    setErrors(false);
    setIsSamePass(false);
    setIsValidEmail(false);
    setToucheForm(false);
   }
  
  return (
    <div>
      <Form onSubmit={submit} >
        <Form.Control className="mb-3"
          type="text"
          name="firstName"
          placeholder="Nombre"
          onChange={e => setNombre(e.target.value)}
          isInvalid={toucheForm && errors}
        />
        <Form.Group >
          <Form.Control className="mb-3"
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            onChange={e => setEmail(e.target.value)}
            isInvalid={toucheForm && (errors)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control className="mb-3"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={e => setPass(e.target.value)}
            isInvalid={toucheForm && (errors || !isSamePass)}
          />
          <Form.Control className="mb-3"
            type="password"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"  
            onChange={e => setIsSamePass(e.target.value === pass)}
            isInvalid={toucheForm && (errors || !isSamePass)}
          />
        </Form.Group>
          <Button type='submit' variant="success"  className='w-100 mb-2'>
            Registrarse
        </Button>
      
         { toucheForm || showAlert ?  <Alert message={errors ? 'debe de completar los datos' : 'Se ha registrado correctamente'  } type={errors ? 'danger' : 'success' } /> : null}
        
        </Form>
    </div>
  );
};

export default Formulario;
