import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = ({error, setError}) => {

  return (
    <div>
      <h1 style={{ paddingTop: '20px', textAlign: 'center' }}>
        Crea una cuenta
      </h1>
      <SocialButton face={"face"} git={"git"} link={"link"} />
      <p style={{ textAlign: 'center' }}>O usa tu email para registrarte</p>

      <Formulario error={error} setError={setError} />

      {error.error && (
        <Alert error={error.error} msg={error.msg} color={error.color} />
      )}


    </div>
  );
}

export default Registro;
