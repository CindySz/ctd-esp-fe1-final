import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rickMortyReducer } from './reducers/rickMortyReducer'
import { TypedUseSelectorHook,useSelector as useReduxSelector,} from "react-redux";
import { favoritesReducer } from './reducers/favoritesReducer';

const reducers = combineReducers({
   characters: rickMortyReducer,
   favorites: favoritesReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export type IRootState = ReturnType<typeof reducers>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))