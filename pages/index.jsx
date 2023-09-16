import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import Slider from '../components/slider';
export default function HomePage() {

    const divCarouselClass = css`
    max-width: 80%;
    margin: 20px auto;
    padding: 5px;
    box-shadow: 0px 2px 1px #74747470;
    border-radius: 15px;
`;
    return (
        <>
            <Layout />
            <main>
                <div css={divCarouselClass}>
                    <Slider />
                </div>
            </main>
        </>
    );
}
