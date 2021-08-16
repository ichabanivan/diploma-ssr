const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  /* by default config  option Read For More Options
  here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true
});

module.exports = {
  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/news',
        permanent: true,
      },
    ];
  },
};
