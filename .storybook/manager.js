import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const design = create({
  base: 'light',
  colorPrimary: '#800080',
  colorSecondary: '#036bc9',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#dddddd',
  appBorderRadius: '0.5em',

  // Typography
  fontBase: '"Lato", sans-serif',
  fontCode: '"Menlo", monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: '#800080',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#dddddd',
  inputTextColor: 'black',
  inputBorderRadius: '0.5em',

  // brand
  brandTitle: 'MK UI',
  brandTarget: 'MK UI',
});

addons.setConfig({
  design,
});
