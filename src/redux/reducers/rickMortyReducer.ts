interface Reducer {
    initialState: {
        loading: boolean
        rickMortyData: null
        page:any,
        error: null
    }
    actions: {
        type: 'FETCH-RICKMORTY' | 'FETCH-RICKMORTY-SUCCESS' | 'FETCH-RICKMORTYN-ERROR',
        payload?: any,
        pageInfo?:any
    }
}

const initialState: Reducer['initialState'] = {
    loading: false,
    rickMortyData: null,
    page:  { count: 0, pages: 0, next: "", prev: "" },
    error: null
}

/**
 * Characters reducer
 *
 * @function rickMortyReducer
 * @param {object} state
 * @param {object} actions
 */

export const rickMortyReducer = (state= initialState, actions: Reducer['actions']) => {
    switch (actions.type) {
        case 'FETCH-RICKMORTY':
            return {
                ...state,
                loading: true
            }
        case 'FETCH-RICKMORTY-SUCCESS':
            return {
                ...state,
                loading: false,
                rickMortyData: actions.payload,
                page:actions.pageInfo,
                error: null
            }


        case 'FETCH-RICKMORTYN-ERROR':
            return {
                ...state,
                loading: false,
                rickMortyData: null,
                error: actions.payload
            }

        default:
            return {...state}
    }

}