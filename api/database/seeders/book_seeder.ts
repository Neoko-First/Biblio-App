import Book from '#models/book'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const user = await User.query().select('id').first()
    await Book.createMany([
      {
        title: 'The Great Gatsby',
        cover: 'great_gatsby.jpg',
        resume: 'A tale of love, wealth, and tragedy in the roaring twenties.',
        author: 'F. Scott Fitzgerald',
        userId: user?.id,
      },
      {
        title: 'To Kill a Mockingbird',
        cover: 'to_kill_a_mockingbird.jpg',
        resume: 'A novel about the serious issues of rape and racial inequality.',
        author: 'Harper Lee',
        userId: user?.id,
      },
      {
        title: '1984',
        cover: '1984.jpg',
        resume: 'A dystopian novel set in a totalitarian society under constant surveillance.',
        author: 'George Orwell',
        userId: user?.id,
      },
      {
        title: 'Pride and Prejudice',
        cover: 'pride_and_prejudice.jpg',
        resume:
          'A romantic novel that charts the emotional development of the protagonist, Elizabeth Bennet.',
        author: 'Jane Austen',
        userId: user?.id,
      },
      {
        title: 'The Catcher in the Rye',
        cover: 'catcher_in_the_rye.jpg',
        resume: 'A story about teenage rebellion and angst.',
        author: 'J.D. Salinger',
        userId: user?.id,
      },
      {
        title: 'The Hobbit',
        cover: 'the_hobbit.jpg',
        resume: 'A fantasy novel about the adventures of a hobbit named Bilbo Baggins.',
        author: 'J.R.R. Tolkien',
        userId: user?.id,
      },
      {
        title: 'Moby Dick',
        cover: 'moby_dick.jpg',
        resume:
          'The narrative of Captain Ahab’s obsessive quest to kill the white whale, Moby Dick.',
        author: 'Herman Melville',
        userId: user?.id,
      },
      {
        title: 'War and Peace',
        cover: 'war_and_peace.jpg',
        resume: 'A historical novel that chronicles the French invasion of Russia.',
        author: 'Leo Tolstoy',
        userId: user?.id,
      },
      {
        title: 'The Odyssey',
        cover: 'the_odyssey.jpg',
        resume:
          'An epic poem that follows the Greek hero Odysseus on his journey home after the Trojan War.',
        author: 'Homer',
        userId: user?.id,
      },
      {
        title: 'Crime and Punishment',
        cover: 'crime_and_punishment.jpg',
        resume: 'A psychological novel exploring the moral dilemmas faced by the protagonist.',
        author: 'Fyodor Dostoevsky',
        userId: user?.id,
      },
      {
        title: 'The Brothers Karamazov',
        cover: 'the_brothers_karamazov.jpg',
        resume:
          'A philosophical novel that explores deep questions about faith, doubt, and morality.',
        author: 'Fyodor Dostoevsky',
        userId: user?.id,
      },
      {
        title: 'Les Misérables',
        cover: 'les_miserables.jpg',
        resume: 'A historical novel that examines the struggles of ex-convict Jean Valjean.',
        author: 'Victor Hugo',
        userId: user?.id,
      },
      {
        title: 'Brave New World',
        cover: 'brave_new_world.jpg',
        resume: 'A dystopian novel that explores the dangers of state control and consumerism.',
        author: 'Aldous Huxley',
        userId: user?.id,
      },
      {
        title: 'Anna Karenina',
        cover: 'anna_karenina.jpg',
        resume: 'A tragic love story set against the backdrop of Russian high society.',
        author: 'Leo Tolstoy',
        userId: user?.id,
      },
      {
        title: 'The Divine Comedy',
        cover: 'divine_comedy.jpg',
        resume:
          'An epic poem that describes Dante’s journey through Hell, Purgatory, and Paradise.',
        author: 'Dante Alighieri',
        userId: user?.id,
      },
      {
        title: 'The Grapes of Wrath',
        cover: 'grapes_of_wrath.jpg',
        resume:
          'A novel that tells the story of the Joads, an impoverished family during the Great Depression.',
        author: 'John Steinbeck',
        userId: user?.id,
      },
      {
        title: 'Wuthering Heights',
        cover: 'wuthering_heights.jpg',
        resume:
          'A novel about the intense and almost demonic love between Catherine Earnshaw and Heathcliff.',
        author: 'Emily Brontë',
        userId: user?.id,
      },
      {
        title: 'Don Quixote',
        cover: 'don_quixote.jpg',
        resume:
          'A story about the adventures of a nobleman who reads so many chivalric romances that he loses his sanity.',
        author: 'Miguel de Cervantes',
        userId: user?.id,
      },
      {
        title: 'The Lord of the Rings',
        cover: 'lord_of_the_rings.jpg',
        resume: 'An epic fantasy novel about the quest to destroy the One Ring.',
        author: 'J.R.R. Tolkien',
        userId: user?.id,
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        cover: 'harry_potter.jpg',
        resume:
          'The first book in the Harry Potter series, about a young wizard discovering his magical heritage.',
        author: 'J.K. Rowling',
        userId: user?.id,
      },
    ])
  }
}
