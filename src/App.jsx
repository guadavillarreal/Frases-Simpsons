import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  //p guardar lo que devuelve la api-statr
  const [frasePersonaje, setFrasePersonaje] = useState({});
  //ciclo de vida
  useEffect(() => {
    //llamada a funcion
    consultarAPI();
  }, []);
  //fuera de la api para poder usarla afuera de la api
  const consultarAPI = async () => {
    //cuando se utiliza solicitudes fech se suele usar try-catch, 
    //try si la api func ok , catch xsi el codigo-api(error mio) falla se ejecuta 
    try {
      //app fech api:viaja al serv xlo q nose el tiempo de respuesta x la promesa de respuesta
      //async-await: quiere decir que hay que esperar la resp antes de seguir
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      //json-metd de js, del obj respond, puede tardar xloq ponemos el metd await
      //para extraer el body de la resp
      const datos = await respuesta.json();
      console.log(respuesta);
      console.log(datos);
      //llamada a la func
      //guardar los datos del api en el state
      setFrasePersonaje(datos[0]);
    } catch (error) {
      console.log(error);
      // agregar un mensaje para el usuario xel error
    //catch xsi el codigo-api(error mio) falla se ejecuta si es mi error lo arreglo sino veo la api , puede estar fallando su serv
    }
  };

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        {/*envio de datos-props desde setFrasePersonaje*/}
        <Frase frasePersonajeProps={frasePersonaje}></Frase>
        {/*cuando hacen click en el btn invoca la func que llama ala api, por eso lo realizamos afuera de la app- es una func sin param xlo que no se declara
        como func de flecha, si le llegase a porne los () recargaria antes de tiempo */}
        <Button variant="warning" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
