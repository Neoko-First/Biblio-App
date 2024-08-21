// node ace make:controller auth

import User from '#models/user'
import { loginUserValidator, registerUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await registerUserValidator.validate(data)
    await User.create(payload)
    return response.status(201).json({ message: 'User created!' })
  }

  async login({ auth, request, response }: HttpContext) {
    /**
     * Step 1: Get credentials from the request body
     */
    const data = request.all()
    await loginUserValidator.validate(data)

    const { email, password } = request.only(['email', 'password'])

    /**
     * Step 2: Verify credentials
     */
    const user = await User.verifyCredentials(email, password)

    /**
     * Step 3: Login user
     */
    await auth.use('web').login(user)

    /**
     * Step 4: Send them to a protected route
     */
    response.status(200).json({ message: 'User logged in!' })
  }
}
