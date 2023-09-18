import React from 'react';
import { css } from '@emotion/react';
import Layout from '../../components/layout';

const payment = () => {
    const h3PaymentClass = css`
        text-align: center;
    `;
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
                <h3 css={h3PaymentClass}>
                    پرداخت موفقیت آمیز بود
                </h3>
                <br />
                <h3 css={h3PaymentClass}>
                    Payment was successful
                </h3>
            </div>
        </>
    );
};

export default payment;
