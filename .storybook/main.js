/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
    stories: [
        '../**/**/*.mdx',
        '../**/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-styling',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
