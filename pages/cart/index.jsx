import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { removeFromCart } from '../../actions/cartActions';
import Layout from '../../components/layout';

function Cart() {
    const divCarouselClass = css`
        max-width: 80%;
        margin: 20px auto;
        box-shadow: 0px 2px 1px #74747470;
        padding: 15px 20px;
    `;
    const divCartclass = css`
        text-align: center;
    `;
    const [cartItem, setCartItem] = useState([]);
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
        setCartItem(storedCartItems);
    }, []);

    function removeFromLocalStorage(productId) {
        const cartItemss = JSON.parse(localStorage.getItem('cartItem')) || [];
        const updatedCart = cartItemss.filter((item) => item.id !== productId);
        localStorage.setItem('cartItem', JSON.stringify(updatedCart));
    }

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
        dispatch({ type: 'REMOVE_FROM_CART', productId });
        removeFromLocalStorage(productId);
        window.location.reload();
    };

    return (
        <>
            <Layout />
            <div css={divCarouselClass}>
                <h2 css={divCartclass}>Shopping Cart</h2>
                {cartItem.length === 0 ? (
                    <div css={divCartclass}>Your cart is empty.</div>
                ) : (
                    <div css={divCartclass}>
                        <ul>
                            {cartItem.map((item) => (
                                <li key={item.id}>
                                    {item.products}
                                    {' '}
                                    - $
                                    {item.price}
                                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <h3>
                                Total: $
                                {cartItem.reduce((acc, item) => acc + parseFloat(item.price), 0)}
                            </h3>
                        </div>
                        <form action="/payment" method="GET">
                            <input type="text" id="name" name="name" placeholder="نام خود را وارد کنید" />
                            <label htmlFor="name">نام و نام خانوادگی</label>
                            <br />
                            <input type="text" id="mobile" name="mobile" placeholder="شماره موبایل خود را وارد کنید" />
                            <label htmlFor="mobile">شماره موبایل</label>
                            <br />
                            <input type="text" id="address" name="address" placeholder="آدرس خود را وارد کنید" />
                            <label htmlFor="address">آدرس</label>
                            <br />
                            <button type="submit">پرداخت</button>
                        </form>

                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
