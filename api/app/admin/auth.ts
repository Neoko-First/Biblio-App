import User from '#models/user'
import { loginUserValidator } from '#validators/user'
import { HttpContext } from '@adonisjs/core/http'
import { CurrentAdmin, DefaultAuthProvider, DefaultAuthenticatePayload } from 'adminjs'
import componentLoader from './component_loader.js'

const authenticate = async (
  { email, password }: DefaultAuthenticatePayload,
  { auth }: HttpContext
): Promise<CurrentAdmin | null> => {
  try {
    /**
     * Step 1: Get credentials from the request body
     */
    await loginUserValidator.validate({ email, password })

    /**
     * Step 2: Verify credentials
     */
    const user = await User.verifyCredentials(email, password)

    /**
     * Step 3: Login user
     */
    if (user) {
      await auth.use('web').login(user)

      // Return user information to AdminJS
      return Promise.resolve({ email: user.email })
    } else {
      return null
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return null
  }
}

const authProvider = new DefaultAuthProvider({
  componentLoader,
  authenticate,
})

export default authProvider
