import Book from '#models/book'
import { storeBookValidator, updateBookValidator } from '#validators/store_book'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class BooksController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Book.query()
      .select('title', 'author', 'cover', 'user_id', 'id')
      .preload('categories', (c) => c.select('id', 'name'))
      .preload('user', (u) => u.select('email', 'firstname'))
  }

  /**
   * Handle form submission for the create action
   */
  async store({ auth, request, response }: HttpContext) {
    try {
      // Validation des données entrantes
      const payload = await request.validateUsing(storeBookValidator)

      await payload.cover.move(app.makePath('uploads'), {
        name: `${cuid()}.${payload.cover.extname}`,
      })

      const fileName = payload.cover.fileName

      const book = await Book.create({
        title: payload.title,
        resume: payload.resume,
        cover: fileName,
        author: payload.author,
        userId: auth.user!.id,
      })

      await book.related('categories').attach(payload.categories)

      return response.status(201).json({ message: 'Book created !' })
    } catch (err) {
      console.error(err)
      return response.status(500).json({ message: 'Failed to store book', error: err.message })
    }
  }

  /**
   * Show individual record
   */
  async show({ request }: HttpContext) {
    return Book.findOrFail(request.params().id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ bouncer, request, response }: HttpContext) {
    // Validation des données entrantes
    const payload = await request.validateUsing(updateBookValidator)
    const book = await Book.findOrFail(request.params().id)
    await bouncer.with('BookPolicy').authorize('update', book) // on vérifie que l'utilisateur a les droits pour mettre à jour ce livre

    let fileName
    if (payload.cover) {
      // @TODO : Supprimer l'ancien fichier si existant

      await payload.cover.move(app.makePath('uploads'), {
        name: `${cuid()}.${payload.cover.extname}`,
      })
      fileName = payload.cover.fileName
    }

    const updatedBook = await book
      .merge({
        title: payload.title,
        resume: payload.resume,
        cover: fileName,
        author: payload.author,
      })
      .save()

    await updatedBook.related('categories').sync(payload.categories)

    return response.status(200).json({ message: 'Book updated !' })
  }

  /**
   * Delete record
   */
  async destroy({ bouncer, request, response }: HttpContext) {
    const book = await Book.findOrFail(request.params().id)
    await bouncer.with('BookPolicy').authorize('delete', book) // on vérifie que l'utilisateur a les droits pour supprimer ce livre
    await book.related('categories').detach()
    // @TODO supprimer l'image cover
    await book.delete()

    return response.status(200).json({ message: 'Book deleted !' })
  }
}
