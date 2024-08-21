import Book from '#models/book'
import User from '#models/user'
import { BasePolicy } from '@adonisjs/bouncer'

export default class BookPolicy extends BasePolicy {
  async update(user: User, book: Book) {
    return user.id === book.userId // si le user est le proprietaire du livre, on l'autorise
  }

  async delete(user: User, book: Book) {
    return user.id === book.userId // si le user est le proprietaire du livre, on l'autorise
  }
}
