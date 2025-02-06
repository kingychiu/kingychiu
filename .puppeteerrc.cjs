// https://stackoverflow.com/questions/77779601/puppeteer-could-not-find-chrome-ver-119-0-6045-105-error
const { join } = require("path");

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
};
