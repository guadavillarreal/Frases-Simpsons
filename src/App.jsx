import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [frasePersonaje, setFrasePersonaje] = useState({})

  useEffect(()=>{
    consultarAPI();
  }, []);

  const consultarAPI = async()=>{
      try{
        const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
        const datos = await respuesta.json()
        console.log(respuesta);
        console.log(datos);
        //guardar los datos del api en el state
        setFrasePersonaje(datos[0])
      }catch(error){
        console.log(error);
        // agregar un mensaje para el usuario
      } 

 
  }
  
  return (
    <>
       <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
       <Frase frasePersonajeProps={frasePersonaje}></Frase>
        <Button variant="warning" onClick={consultarAPI}>Obtener frase</Button>
      </Container>
    </>
  )
}

export default App
