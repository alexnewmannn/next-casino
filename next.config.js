module.exports = {
  webpack: (config, { dev }) => {
    console.log(config);
    config.module.rules.push({
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              // includePaths: [
              //   path.join(__dirname, 'src/'),
              //   path.join(__dirname, '/node_modules/@bedegaming/bolt/src/')
              // ]
            }
          }
        ]
      });
    return config;
  }
}
