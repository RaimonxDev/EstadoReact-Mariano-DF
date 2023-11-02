import SocialButton from './SocialButton'
import Formulario from './Formulario'
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';


const Registro = () => {
  return (
    <>
    <div>
      <h1 style={{ paddingTop: '20px' }}>
      Crea una cuenta
      </h1>
    
    <SocialButton 
    face={<BsFacebook /> }
    git={<BsGithub />} 
    link={<FaLinkedinIn />}
    />
    <p style={{ textAlign: 'center' }}>O usa tu email para registrarte</p>
        <Formulario/>
    </div>


    </>
  )
}

export default Registro