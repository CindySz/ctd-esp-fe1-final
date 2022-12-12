import axios from "axios"

const fetchRickMorty = () => {
    return {
        type: 'FETCH-RICKMORTY'
    }
}

const fetchRickMortySuccess = (data: any, pageInfo:any) => {
    return {
        type: 'FETCH-RICKMORTY-SUCCESS',
        payload: data,
        pageInfo:pageInfo
    }
}


const fetchRickMortyError = (error: any) => {
    return {
        type: 'FETCH-RICKMORTYN-ERROR',
        payload: error
    }
}




    export const getRickMorty = (name:string):any => {
    return async (dispatch: any) => {
        dispatch(fetchRickMorty())
       const response= await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
       
           try{ 
            
                dispatch(fetchRickMortySuccess(response.data, response.data.info))
            }
         catch(error ) {
                dispatch(fetchRickMortyError(error))
        }
    }


    
}

export const changePage = (url: string): any => {
    return async (dispatch:any) => {
      try {
        const response = await axios.get(url);
        dispatch(fetchRickMortySuccess(response.data, response.data.info))
        
      } catch (error) {
        dispatch(fetchRickMortyError(error))
      }}
    };