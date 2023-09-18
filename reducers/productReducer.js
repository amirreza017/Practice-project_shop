const initialState = {
    data: null,
    loading: false,
    error: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'FETCH_STARTED':
        return {
            ...state,
            data: null,
            loading: true,
            error: null,
        };
    case 'FETCH_SUCCESS':
        return {
            ...state,
            data: action.payload,
            loading: false,
            error: null,
        };
    case 'FETCH_FAILURE':
        return {
            ...state,
            data: null,
            loading: false,
            error: action.payload,
        };
    default:
        return state;
    }
};

export default dataReducer;
