import { useState } from "react";
import Registro from "./components/Registro";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const [error, setError] = useState({});

  return (
    <>
      <div className="container">  
        <Registro 
        setError={setError}
        error={error}/>
        
      </div>
    </>
  );
}

export default App;