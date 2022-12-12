

interface Reducer {
    initialState: {
    
        favorites: Map<number, any>
    }
    actions: {
        type: 'SAVE-FAVORITES' | 'DELETE-FAVORITES' ,
        payload?:any
    }
}

const initialState:Reducer['initialState'] = {
   
    favorites: new Map()
}



export const favoritesReducer = (state= initialState, actions: Reducer['actions']) => {
    switch (actions.type) {
        case 'SAVE-FAVORITES':

           

        
        const map = new Map<number, any>();
        state.favorites.forEach((character) => {
          map.set(character.id, character);
        });
  
        state.favorites.has(actions.payload.id)
          ? map.delete(actions.payload.id)
          : map.set(actions.payload.id, actions.payload);
      

            return {
               ...state,
               favorites: map
            }
        case 'DELETE-FAVORITES':
            return {
                ...initialState,
              
            }


       

        default:
            return {...state}
    }

}