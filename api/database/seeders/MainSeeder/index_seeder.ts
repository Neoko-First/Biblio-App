import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../category_seeder.js'))
    await this.runSeeder(await import('../user_seeder.js'))
    await this.runSeeder(await import('../book_seeder.js'))
  }
}
