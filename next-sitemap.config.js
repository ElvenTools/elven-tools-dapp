/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ghostverse.org',
  generateRobotsTxt: true,
};
