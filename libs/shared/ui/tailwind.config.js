const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const sharedTailwindConfig = require('../../../tailwind-shared.config');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
