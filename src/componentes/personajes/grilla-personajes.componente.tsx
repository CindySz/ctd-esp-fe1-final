import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux"
import { IRootState } from "../../redux/store";
import { useEffect } from 'react';
import { getRickMorty } from '../../redux/actions/rickMartyAction';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const dispatch=useDispatch()

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;


    const { rickMortyData, error, loading } = useSelector(state => state.characters)
   
    

    useEffect(() => {
        dispatch(getRickMorty(" "));
      }, [dispatch]);
     

    return (
        <>
            {loading === true ? <div>Cargando personajes...</div> : null}
            {error === true ? <div>No se pudo cargar los personajes.</div> : null}
            <div className="grilla-personajes">
                {rickMortyData?.results?.map((character: any) => {
                    return (
                        <div key={character.id}>
                            <TarjetaPersonaje character={character} />
                        </div>
                    );
                })}
            </div>
        </>)
}

export default GrillaPersonajes;