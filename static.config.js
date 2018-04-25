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
      {
        path: '/grid',
        component: 'src/containers/Grid',
      },
      {
        path: '/containers',
        component: 'src/containers/Containers',
      },
      {
        path: '/sections',
        component: 'src/containers/Sections',
      },
      {
        path: '/colors',
        component: 'src/containers/Colors',
      },
      {
        path: '/typography',
        component: 'src/containers/Typography',
      },
      {
        path: '/buttons',
        component: 'src/containers/Buttons',
      },
      {
        path: '/forms',
        component: 'src/containers/Forms',
      },
      {
        path: '/tables',
        component: 'src/containers/Tables',
      },
      {
        path: '/cards',
        component: 'src/containers/Cards',
      },
      {
        path: '/carousels',
        component: 'src/containers/Carousels',
      },
      {
        path: '/dropdowns',
        component: 'src/containers/Dropdowns',
      },
      {
        path: '/modals',
        component: 'src/containers/Modals',
      },
      {
        path: '/notices',
        component: 'src/containers/Notices',
      },
      {
        path: '/pagination',
        component: 'src/containers/Pagination',
      },
      {
        path: '/toggles',
        component: 'src/containers/Toggles',
      },
      {
        path: '/tooltips',
        component: 'src/containers/Tooltips',
      },
      {
        path: '/utilities',
        component: 'src/containers/Utilities',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
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
    config.module.rules = [{
      oneOf: [
        defaultLoaders.jsLoader,
        cssLoader,
        defaultLoaders.fileLoader,
      ],
    }];
    return config;
  },
}
