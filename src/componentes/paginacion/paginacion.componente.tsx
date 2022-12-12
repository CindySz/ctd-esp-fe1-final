
import "./paginacion.css";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import { changePage } from "../../redux/actions/rickMartyAction";
import { IRootState } from "../../redux/store";



/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion = () => {

  
  const dispatch = useDispatch();
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

  const pageInfo= useSelector(state => state.characters.page)
  const { next, prev } = pageInfo;

  


  const prevPage = () => {
    dispatch(changePage(prev))
     
  };

  const nextPage = () => {
    dispatch(changePage(next))
  
     
  };

  return (
    <div className="paginacion">
      <button disabled={prev===null?true:false } onClick={prevPage} className={"primary"}>
        Anterior
      </button>
      <button disabled={next===null?true:false} onClick={nextPage}  className={"primary"}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
