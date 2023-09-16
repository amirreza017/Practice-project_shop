import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Carousel from 'rsuite/Carousel';
import Link from 'next/link';
import slider1 from '../public/slider1.gif';
import slider2 from '../public/FFFFFF.png';
import slider3 from '../public/slider3.jpg';
import slider4 from '../public/slider4.webp';
import 'rsuite/dist/rsuite-no-reset.min.css';

const sliderComponent = () => {
    const carouselClass = css`
    max-width: 70%;
    margin: 5px auto;
    border-radius: 15px;
    `;
    const slider = css`
    border-radius: 15px;
    `;
    const image = css`
    max-width: 100%;
    height: 400px;
    `;

    return (
        <div css={carouselClass}>
            <Carousel key="bottom.bar" placement="bottom" shape="bar" className="custom-slider" css={slider}>
                <Link href="products/washing machine">
                    {' '}
                    <Image src={slider1} css={image} alt="washing machine" />
                    {' '}
                </Link>
                <Link href="products/Television">
                    {' '}
                    <Image src={slider2} css={image} alt="Television" />
                    {' '}
                </Link>
                <Link href="products/dishwasher">
                    {' '}
                    <Image src={slider3} css={image} alt="dishwasher" />
                    {' '}
                </Link>
                <Link href="products/Refrigerator">
                    {' '}
                    <Image src={slider4} css={image} alt="Refrigerator" />
                    {' '}
                </Link>
                <Link href="products/Game console">
                    {' '}
                    <Image src={slider2} css={image} alt="Game console" />
                    {' '}
                </Link>
                <Link href="products/Mobile">
                    {' '}
                    <Image src={slider1} css={image} alt="Mobile" />
                    {' '}
                </Link>
            </Carousel>
        </div>
    );
};

export default sliderComponent;
