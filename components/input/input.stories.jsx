import React from 'react';
import Input from './input';
import './input.css';

export default {
    title: 'Input',
    component: Input,
    argTypes: {

    },
};

export function Example() {
    return (
        <input
            type="text"
            placeholder="Example"
        />
    );
}