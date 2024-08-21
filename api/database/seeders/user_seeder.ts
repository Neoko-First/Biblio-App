import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      { firstname: 'John', lastname: 'Doe', email: 'john.doe@example.com', password: '123456' },
      { firstname: 'Jane', lastname: 'Smith', email: 'jane.smith@example.com', password: '123456' },
      {
        firstname: 'Michael',
        lastname: 'Brown',
        email: 'michael.brown@example.com',
        password: '123456',
      },
      {
        firstname: 'Emily',
        lastname: 'Davis',
        email: 'emily.davis@example.com',
        password: '123456',
      },
      {
        firstname: 'Chris',
        lastname: 'Miller',
        email: 'chris.miller@example.com',
        password: '123456',
      },
      {
        firstname: 'Jessica',
        lastname: 'Wilson',
        email: 'jessica.wilson@example.com',
        password: '123456',
      },
      {
        firstname: 'David',
        lastname: 'Moore',
        email: 'david.moore@example.com',
        password: '123456',
      },
      {
        firstname: 'Sarah',
        lastname: 'Taylor',
        email: 'sarah.taylor@example.com',
        password: '123456',
      },
      {
        firstname: 'Daniel',
        lastname: 'Anderson',
        email: 'daniel.anderson@example.com',
        password: '123456',
      },
      {
        firstname: 'Laura',
        lastname: 'Thomas',
        email: 'laura.thomas@example.com',
        password: '123456',
      },
      {
        firstname: 'James',
        lastname: 'Jackson',
        email: 'james.jackson@example.com',
        password: '123456',
      },
      {
        firstname: 'Hannah',
        lastname: 'White',
        email: 'hannah.white@example.com',
        password: '123456',
      },
      {
        firstname: 'Matthew',
        lastname: 'Harris',
        email: 'matthew.harris@example.com',
        password: '123456',
      },
      {
        firstname: 'Olivia',
        lastname: 'Martin',
        email: 'olivia.martin@example.com',
        password: '123456',
      },
      {
        firstname: 'Joshua',
        lastname: 'Thompson',
        email: 'joshua.thompson@example.com',
        password: '123456',
      },
      {
        firstname: 'Sophia',
        lastname: 'Garcia',
        email: 'sophia.garcia@example.com',
        password: '123456',
      },
      {
        firstname: 'Andrew',
        lastname: 'Martinez',
        email: 'andrew.martinez@example.com',
        password: '123456',
      },
      {
        firstname: 'Megan',
        lastname: 'Robinson',
        email: 'megan.robinson@example.com',
        password: '123456',
      },
      {
        firstname: 'Brian',
        lastname: 'Clark',
        email: 'brian.clark@example.com',
        password: '123456',
      },
      {
        firstname: 'Emma',
        lastname: 'Rodriguez',
        email: 'emma.rodriguez@example.com',
        password: '123456',
      },
    ])
  }
}
