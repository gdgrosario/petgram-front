// next.config.js
const withPlugins = require('next-compose-plugins');
const withReactSvg = require('next-react-svg');
const path = require('path');

const withPWA = require('next-pwa');

const config = {
  env: {
    MY_ENV: '',
  },
};

module.exports = withPlugins(
  [
    [
      withReactSvg({
        include: path.resolve(__dirname, './public/assets/svg'),
      }),
      withPWA({
        pwa: {
          dest: 'public',
          disable: process.env.NODE_ENV === 'development',
          register: true,
          skipWaiting: true,
        },
        reactStrictMode: true,
        images: {
          domains: [],
        },
      }),
    ],
  ],
  config
);
