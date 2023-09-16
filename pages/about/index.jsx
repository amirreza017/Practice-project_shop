import React from 'react';
import { css } from '@emotion/react';
import Layout from '../../components/layout';
import H1 from '../../components/typography/H1';

function About() {
    const divCarouselClass = css`
    max-width: 80%;
    margin: 20px auto;
    box-shadow: 0px 2px 1px #74747470;
    border-radius: 15px;
    padding: 5px;
`;
    return (
        <>
            <Layout />
            <div css={divCarouselClass}>
                <H1>About</H1>
            </div>
        </>
    );
}

export default About;
