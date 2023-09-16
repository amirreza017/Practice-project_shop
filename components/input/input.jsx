import React from 'react';
import { css } from '@emotion/react';

function Input({ type, info }) {
    return (
        <input
            type={type}
            placeholder={info}
            css={css`
                width: 250px;
                outline: none;
                margin-bottom: 10px;
                border: none;
                background-color: #dddcdc;
                padding: 5px 10px;
                border-radius: 15px;
                font-family: Sahel;
            `}
        />
    );
}

export default Input;
