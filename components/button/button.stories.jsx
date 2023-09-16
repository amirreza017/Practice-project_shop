// این یک مثال ساده از یک کامپوننت است
import React from 'react';
import Button from './Button';
import './button.css';

export default {
    title: 'Button',
    component: Button,
    argTypes: {

    },
};

export function Primary() {
    return (
        <button
            type="button"
            className="btn"
        >
            Primary Button
        </button>
    );
}
