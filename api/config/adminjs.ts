import { AdminJSProviderConfig, LucidResource } from '@adminjs/adonis'

import Book from '#models/book'
import User from '#models/user'
import authProvider from '../app/admin/auth.js'
import componentLoader from '../app/admin/component_loader.js'

const adminjsConfig: AdminJSProviderConfig = {
  adapter: {
    enabled: true,
  },
  adminjs: {
    rootPath: '/admin',
    loginPath: '/admin/login',
    logoutPath: '/admin/logout',
    componentLoader,

    resources: [
      {
        resource: new LucidResource(User, 'mysql'),
        options: {},
      },
      {
        resource: new LucidResource(Book, 'mysql'),
        options: {
          actions: {},
        },
      },
    ],
    pages: {},
    locale: {
      availableLanguages: ['fr'],
      language: 'fr',
      translations: {
        fr: {
          actions: {},
          messages: {
            welcomeOnBoard_title: 'Bienvenue sur Biblio',
            welcomeOnBoard_subtitle: 'Amusez vous bien ;-)',
          },
          labels: {},
          buttons: {},
          properties: {},
          components: {},
          pages: {},
          ExampleResource: {
            actions: {},
            messages: {},
            labels: {},
            buttons: {},
            properties: {},
          },
        },
      },
    },
    branding: {
      companyName: 'Biblio',
      theme: {},
    },
    settings: {
      defaultPerPage: 10,
    },
  },
  auth: {
    enabled: true,
    provider: authProvider,
    middlewares: [],
  },
  middlewares: [],
}

export default adminjsConfig
