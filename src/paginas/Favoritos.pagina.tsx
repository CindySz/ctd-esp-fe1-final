import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../redux/store";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { deleteFavorites } from "../redux/actions/favoriteAction";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const dispatch = useDispatch();
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button
          onClick={() => {
            dispatch(deleteFavorites());
          }}
          className="danger"
        >
          Eliminar todos
        </button>
      </div>

    
      {favorites.size === 0 ? (
        <div>No hay seleccionados personajes favoritos</div>
      ) : (
    
        Array.from(favorites.values()).map((character, index) => {
            return (
              <div key={character.id}>
                <TarjetaPersonaje character={character} />
              </div>
            );
          })
      )}
    </div>
  );
};

export default PaginaFavoritos;
