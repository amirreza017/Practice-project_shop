import React from 'react';
import { css } from '@emotion/react';

function Button({
    type = 'button', children, }) {
    return (
        <button
            type={type}
            css={css`
            border: none;
            border-radius: 15px;
            padding: 5px 10px;
            background-color: #34495E; 
            color: #fff;
            margin-top: 5px;
            cursor: pointer;
            font-family: Sahel;
            `}
            onClick={(e) => e.preventDefault()}
        >
            {children}
        </button>
    );
}

export default Button;
