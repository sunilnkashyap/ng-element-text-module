const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/textModule/runtime.js',
    './dist/textModule/polyfills.js',
    './dist/textModule/scripts.js',
    './dist/textModule/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/text-element.js');
})();
