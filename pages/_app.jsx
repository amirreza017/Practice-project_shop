import React from 'react';
import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '../configs/store';

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default App;
