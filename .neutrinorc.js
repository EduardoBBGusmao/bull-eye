const standard = require('@neutrinojs/standardjs');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    standard(),
    react({
      html: {
        icon: './src/assets/bulleye.svg',
        title: 'Bull.eye'
      }
    }),
    jest(),
  ],
};
