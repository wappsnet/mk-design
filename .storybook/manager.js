import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    colorPrimary: '#800080',
    colorSecondary: '#036bc9',

    // UI
    appBg: '#f1f1f1',
    appContentBg: '#ffffff',
    appBorderColor: '#dddddd',
    appBorderRadius: '0.5em',

    // Typography
    fontBase: '"Lato", sans-serif',
    fontCode: '"Menlo", monospace',

    // Text colors
    textColor: '#000000',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#800080',
    barSelectedColor: '#036bc9',
    barBg: '#f1f1f1',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#dddddd',
    inputTextColor: '#000000',
    inputBorderRadius: '0.5em',

    // brand
    brandTitle: 'MK-UI',
    brandTarget: 'MK-UI',
    brandUrl: 'https://github.com/wappsnet/mk-design',
  }),
});
