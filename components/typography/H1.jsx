import { css } from '@emotion/react';

function H1({ children }) {
    return (
        <h1 css={css`
        text-align: center;
    `}
        >
            {children}
        </h1>
    );
}

export default H1;
