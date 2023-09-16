import React from 'react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { Global, css, ThemeProvider } from '@emotion/react';
import theme from '../../configs/theme';

const Reset = () => (
        <Global
      styles={css`  
        * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        }
      `}
    />
)

export default Reset

export const decorators = [
    withThemeFromJSXProvider({
    themes: {
      theme: theme,
    },
    defaultTheme: 'theme',
    Provider: ThemeProvider,
    Reset,
  })];