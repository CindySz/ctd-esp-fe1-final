

import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * @param {character}
 * @returns {React.ReactElement} JSX element 
 * 
 */



 interface Props {
    character: any
}
const TarjetaPersonaje = ({character}:Props) => {

    

    return (<div className="tarjeta-personaje">
      <img
        src={character.image}
        alt={character.name}
      />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito character={character} />

      </div>
    </div>)
  
}

export default TarjetaPersonaje;

