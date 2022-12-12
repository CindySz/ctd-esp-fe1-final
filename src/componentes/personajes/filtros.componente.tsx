import { useState } from 'react';
import { getRickMorty } from '../../redux/actions/rickMartyAction';
import { useDispatch} from "react-redux"
import './filtros.css';

const Filtros = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const dispatch = useDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
     setInputValue(event.target.value)
     dispatch(getRickMorty(inputValue))}

    
    

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" onChange={handleChange} placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
}

export default Filtros;