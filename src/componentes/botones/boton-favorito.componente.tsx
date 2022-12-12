import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';
import { toggleFavorites } from '../../redux/actions/favoriteAction';
import { IRootState } from '../../redux/store';


import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * @param {character}
 * @returns un JSX element 
 * 
 */


interface Props{
    character:any
}
const BotonFavorito = ({character}:Props) => {


    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector; 
    const dispatch= useDispatch(); 
    const favorites = useSelector(state => state.favorites.favorites)
    

    
   

    
   
    
const onClick=()=>{

    dispatch(toggleFavorites(character))
   
   } 


  
    
    const src = favorites.has(character.id) ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;