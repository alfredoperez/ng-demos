const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const colors = require('tailwindcss/colors');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.indigo,
          DEFAULT: colors.indigo[600],
        },
        accent: {
          ...colors.slate,
          DEFAULT: colors.slate[800],
        },
        warn: {
          ...colors.red,
          DEFAULT: colors.red[600],
        },
        'on-warn': {
          500: colors.red['50'],
        },
      },
    },
    plugins: {},
  },
};
