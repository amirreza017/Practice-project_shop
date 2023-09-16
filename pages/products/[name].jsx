import React from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import H1 from '../../components/typography/H1';

function Product() {
    const router = useRouter();

    const divCarouselClass = css`
    max-width: 80%;
    margin: 20px auto;
    box-shadow: 0px 2px 1px #74747470;
`;
    return (
        <>
            <Layout />
            <div css={divCarouselClass}>
                <H1>
                    Product:
                    {' '}
                    {router.query.name}
                </H1>
            </div>
        </>
    );
}

export default Product;
