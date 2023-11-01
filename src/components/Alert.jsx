import Alert from 'react-bootstrap/Alert';

// eslint-disable-next-line react/prop-types
function BasicExample({message, type}) {
  return (
    <>
     <Alert variant={type}>
          {message}
      </Alert>
    </>
  );
}

export default BasicExample;