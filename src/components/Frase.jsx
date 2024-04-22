import { Card } from "react-bootstrap";
//obj props frasePersonajeProps-desestructurado, donde estan las prop
const Frase = ({frasePersonajeProps}) => {
  return (
    <section className="my-5">
      {/*nombre del personajeindica de donde viene la info-api */}
      <h2>{frasePersonajeProps.character}</h2>
      <hr />
      {/* */}
      {/*frasePersonajeProps.image: direccion de la img de laapi*/}
      {/*alt:nombre del personajeindica de donde viene la info-api */}
      <img className="mb-3" src={frasePersonajeProps.image} alt={frasePersonajeProps.character} />
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
            {/*frasePersonajeProps.quote: la frace que viene de la api*/}
              <p>{frasePersonajeProps.quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
      {/*nombre del personajeindica de donde viene la info-api */}
            {frasePersonajeProps.character} in <cite title="Source Title">The Simpsons</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
