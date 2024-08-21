import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      { name: 'Fiction' },
      { name: 'Mystery' },
      { name: 'Romance' },
      { name: 'Science Fiction' },
      { name: 'Fantasy' },
      { name: 'Thriller' },
      { name: 'Non-Fiction' },
      { name: 'Biography' },
      { name: 'Self-Help' },
      { name: 'Health' },
      { name: 'Travel' },
      { name: "Children's" },
      { name: 'History' },
      { name: 'Poetry' },
      { name: 'Graphic Novel' },
      { name: 'Cooking' },
      { name: 'Art' },
      { name: 'Science' },
      { name: 'Sports' },
      { name: 'Music' },
    ])
  }
}
