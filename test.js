const child_process = require('child_process');

const clear = require('clear');

const testPath = process.argv.slice(2)[0].replace(/(\\|\/)*$/, "");
const cwd = process.cwd();

const fullTestPath = `${cwd}/${testPath}/**/*.test.js`;

clear();

child_process.fork('./node_modules/mocha/bin/mocha', [fullTestPath], { stdio: "inherit" });