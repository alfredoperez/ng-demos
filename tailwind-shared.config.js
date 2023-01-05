const colors = require('tailwindcss/colors');

module.exports = {
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
