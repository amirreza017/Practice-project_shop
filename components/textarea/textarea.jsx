import React from 'react';
import { css } from '@emotion/react';

function Textarea({ info }) {
    return (
        <textarea
          placeholder={info}
          css={css`
                width: 250px;
                max-width: 250px;
                min-width: 250px;
                height: 200px;
                max-height: 200px;
                min-height: 200px;
                outline: none;
                border: none;
                background-color: #dddcdc;
                padding: 5px 10px;
                border-radius: 15px;
                font-family: Sahel;
            `}
        />
    );
}

export default Textarea;
