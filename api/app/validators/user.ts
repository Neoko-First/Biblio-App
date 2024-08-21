import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    firstname: vine.string().trim().escape().minLength(6).maxLength(255),
    lastname: vine.string().trim().escape().minLength(6).maxLength(255),
    email: vine.string().trim().escape(),
    password: vine.string().trim().minLength(6).maxLength(255),
  })
)

export const loginUserValidator = vine.compile(
  vine.object({
    // firstname: vine.string().trim().escape().minLength(6).maxLength(255),
    // lastname: vine.string().trim().escape().minLength(6).maxLength(255),
    email: vine.string().trim().escape(),
    password: vine.string().trim().minLength(6).maxLength(255),
  })
)
