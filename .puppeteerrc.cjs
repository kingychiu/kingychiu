// https://stackoverflow.com/questions/77779601/puppeteer-could-not-find-chrome-ver-119-0-6045-105-error
// https://github.com/puppeteer/puppeteer/issues/10388
// https://pptr.dev/guides/configuration#changing-the-default-cache-directory
const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};