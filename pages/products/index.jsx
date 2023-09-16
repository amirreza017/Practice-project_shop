import React from 'react';
import { css } from '@emotion/react';
import Layout from '../../components/layout';
import Slider from '../../components/slider';
import H1 from '../../components/typography/H1';
import Cards from '../../components/cards';

function Product() {
    const divCarouselClass = css`
    max-width: 80%;
    margin: 20px auto;
    box-shadow: 0px 2px 1px #74747470;
    padding: 15px 20px;
`;
    return (
        <>
            <Layout />
            <div css={divCarouselClass}>
                <H1>Product</H1>
                <Slider />
                <Cards />
            </div>
        </>
    );
}

export default Product;
