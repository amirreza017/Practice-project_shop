const fetchData = () => async (dispatch) => {
    dispatch({
        type: 'FETCH_STARTED',
        payload: 'Loading...',
    });
    try {
        const response = await fetch('http://192.168.1.107:5000/products.json');
        const data = await response.json();

        dispatch({
            type: 'FETCH_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_FAILURE',
            payload: error.message,
        });
    }
};

export default fetchData;
