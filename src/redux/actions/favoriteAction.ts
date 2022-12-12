

export const toggleFavorites = (data:any) => {
    return {
        type: 'SAVE-FAVORITES',
        payload:data
    }
}

export const deleteFavorites = () => {
    return {
        type: 'DELETE-FAVORITES',
       
    }
}


