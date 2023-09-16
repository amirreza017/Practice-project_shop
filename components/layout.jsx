import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

function Layout() {
    const ulClass = css`
    list-style: none;
    display: flex;
    `;
    const navClass = css`
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;
    box-shadow: 0px 2px 1px #74747470;
    width: 80%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    `;
    const liClass = css`
    margin: 0 10px;
    `;
    const link = css`
        text-decoration: none;
        color: black;
        &:hover {
            color: red;            
        }
    `;
    const cartClass = css`
        display:flex;
        justify-content: center;
        align-items: center;
        color: black;
        &:hover {
            color: #fd79a8;
        }
    `;
    const countCartClass = css`
        margin-right: 5px;
    `;
    return (
        <header>
            <nav css={navClass}>
                <ul css={ulClass}>
                    <li css={liClass}>
                        <Link href="/" css={link}> Home </Link>
                    </li>
                    <li css={liClass}>
                        <Link href="/about" css={link}> About </Link>
                    </li>
                    <li css={liClass}>
                        <Link href="/contact" css={link}> Contact </Link>
                    </li>
                    <li css={liClass}>
                        <Link href="/products" css={link}> Product Item </Link>
                    </li>
                </ul>
                <a href="/" css={cartClass}>
                    <div css={countCartClass}>0</div>
                    <FaShoppingCart />
                </a>
            </nav>
        </header>
    );
}

export default Layout;
