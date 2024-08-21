/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const BooksController = () => import('#controllers/books_controller')

router
  .group(() => {
    // Authentification
    router
      .group(() => {
        router.post('register', [AuthController, 'register'])
        router.post('login', [AuthController, 'login'])
      })
      .prefix('auth')

    // Livres
    router
      .group(() => {
        router.get('/', [BooksController, 'index'])
        router.get('/:id', [BooksController, 'show'])
        router.post('/', [BooksController, 'store'])
        router.put('/:id', [BooksController, 'update'])
        router.delete('/:id', [BooksController, 'destroy'])
      })
      .prefix('books')
      .use(middleware.auth())
  })
  .prefix('api')
