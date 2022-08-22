/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/,
      options: {
        name: '/static/media/[name].[hash:8].[ext]',
        esModule: false,
        scalings: { '@2x': 2, '@3x': 3 },
      },
      loader: 'react-native-web-image-loader',
    });
    return config;
  },
}

module.exports = config
