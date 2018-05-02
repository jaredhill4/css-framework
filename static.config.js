import componentMap from './componentMap';

export default {
  siteRoot: 'https://css-framework.netlify.com',
  getSiteData: () => ({
    title: 'WL CSS Framework',
  }),
  getRoutes: () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      ...componentMap,
      {
        is404: true,
        component: 'src/containers/404',
      },
    ];
  },
  webpack: (config, { defaultLoaders, stage }) => {
    let { cssLoader } = defaultLoaders;
    cssLoader.test = /\.s?css$/;
    if (stage === 'dev') {
      cssLoader.use.push({
        loader: 'sass-loader',
        options: { sourceMap: true },
      });
    } else {
      cssLoader.loader.push({
        loader: 'sass-loader',
        options: { sourceMap: false },
      });
    }
    config.module.rules = [
      {
        oneOf: [defaultLoaders.jsLoader, cssLoader, defaultLoaders.fileLoader],
      },
    ];
    return config;
  },
};
