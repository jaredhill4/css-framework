import { lazy } from 'react';

export default [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
    exact: true,
    name: 'Home'
  },
  {
    path: '/grid',
    component: lazy(() => import('../pages/Grid')),
    name: 'Grid',
    category: 'layout'
  },
  {
    path: '/containers',
    component: lazy(() => import('../pages/Containers')),
    name: 'Containers',
    category: 'layout'
  },
  {
    path: '/sections',
    component: lazy(() => import('../pages/Sections')),
    name: 'Sections',
    category: 'layout'
  },
  {
    path: '/colors',
    component: lazy(() => import('../pages/Colors')),
    name: 'Colors',
    category: 'base'
  },
  {
    path: '/typography',
    component: lazy(() => import('../pages/Typography')),
    name: 'Typography',
    category: 'base'
  },
  {
    path: '/buttons',
    component: lazy(() => import('../pages/Buttons')),
    name: 'Buttons',
    category: 'base'
  },
  {
    path: '/forms',
    component: lazy(() => import('../pages/Forms')),
    name: 'Forms',
    category: 'base'
  },
  {
    path: '/tables',
    component: lazy(() => import('../pages/Tables')),
    name: 'Tables',
    category: 'base'
  },
  {
    path: '/cards',
    component: lazy(() => import('../pages/Cards')),
    name: 'Cards',
    category: 'components'
  },
  {
    path: '/carousels',
    component: lazy(() => import('../pages/Carousels')),
    name: 'Carousels',
    category: 'components'
  },
  {
    path: '/dropdowns',
    component: lazy(() => import('../pages/Dropdowns')),
    name: 'Dropdowns',
    category: 'components'
  },
  {
    path: '/modals',
    component: lazy(() => import('../pages/Modals')),
    name: 'Modals',
    category: 'components'
  },
  {
    path: '/notices',
    component: lazy(() => import('../pages/Notices')),
    name: 'Notices',
    category: 'components'
  },
  {
    path: '/pagination',
    component: lazy(() => import('../pages/Pagination')),
    name: 'Pagination',
    category: 'components'
  },
  {
    path: '/toggles',
    component: lazy(() => import('../pages/Toggles')),
    name: 'Toggles',
    category: 'components'
  },
  {
    path: '/tooltips',
    component: lazy(() => import('../pages/Tooltips')),
    name: 'Tooltips',
    category: 'components'
  },
  {
    path: '/utilities',
    component: lazy(() => import('../pages/Utilities')),
    name: 'Utilities',
    category: 'other'
  },
  {
    path: null,
    component: lazy(() => import('../pages/NotFound')),
    name: 'Not Found'
  }
];
