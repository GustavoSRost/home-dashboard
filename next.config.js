const path = require('path');

const nextConfig = {
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
