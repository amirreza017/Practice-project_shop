import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import fetchData from '../../actions/productActions';
import styles from './styleProduct.module.css';
import { addToCart, removeFromCart } from '../../actions/cartActions';

function Cards() {
    const data = useSelector((state) => state.productReducer.data);
    const loading = useSelector((state) => state.productReducer.loading);
    const error = useSelector((state) => state.productReducer.error);
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const addToLocalStorage = (product) => {
        const cartItem = JSON.parse(localStorage.getItem('cartItem')) || [];
        cartItem.push(product);
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
    };

    const removeFromLocalStorage = (productId) => {
        const cartItem = JSON.parse(localStorage.getItem('cartItem')) || [];
        const updatedCart = cartItem.filter((item) => item.id !== productId);
        localStorage.setItem('cartItem', JSON.stringify(updatedCart));
    };

    const handleAddToCart = (cartData) => {
        if (cartItems.some((item) => item.id === cartData.id)) {
            dispatch(removeFromCart(cartData.id));
            removeFromLocalStorage(cartData.id);
        } else {
            dispatch(addToCart(cartData));
            addToLocalStorage(cartData);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    } if (error) {
        return (
            <div>
                Error:
                {error}
            </div>
        );
    }

    return (
        <div className={styles.cardlist}>
            {data && data.map((cartData) => (
                <div className={styles.card} key={cartData.id}>
                    <h3>{cartData.products}</h3>
                    <div className={styles.cardlist_img}>
                        <Image className={styles.img} src={cartData.image} alt="Business Image" width="150" height="100" />
                    </div>
                    <p>
                        <span>Description: </span>
                        {cartData.desc}
                    </p>
                    <button
                        type="button"
                        className={styles.btn}
                        onClick={() => handleAddToCart(cartData)}
                    >
                        {cartItems.some((item) => item.id === cartData.id)
                            ? 'Remove from Cart'
                            : 'Add to Cart'}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Cards;
