import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {[
        'danger',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Completa todos los campos!
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;