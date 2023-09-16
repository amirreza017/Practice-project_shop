import React from 'react';
import { css } from '@emotion/react';
import Layout from '../../components/layout';
import Input from '../../components/input/input';
import Textarea from '../../components/textarea/textarea';
import Button from '../../components/button/Button';
import H1 from '../../components/typography/H1';

function Contact() {
    const divCarouselClass = css`
    max-width: 80%;
    margin: 20px auto;
    box-shadow: 0px 2px 1px #74747470;
    border-radius: 15px;
    padding: 15px 30px;
`;
    return (
        <>
            <Layout />
            <div css={divCarouselClass}>
                <H1>Contact</H1>
                <form css={css`
                        display: flex;
                        flex-direction: column;
                        direction: rtl;
                        align-items: center;
                        justify-content: center;
                    `}
                >
                    <Input
                      type="text"
                      info="نام خود را وارد کنید"
                    />
                    <Textarea info="پیام خود را بنویسید" />
                    <Button type="submit">ارسال</Button>
                </form>
            </div>
        </>
    );
}

export default Contact;
