import vine from '@vinejs/vine'

export const storeBookValidator = vine.compile(
  vine.object({
    title: vine.string(),
    author: vine.string(),
    resume: vine.string(),
    cover: vine.file({
      size: '10mb',
      extnames: ['jpg', 'jpeg', 'webp', 'png'],
    }),
    categories: vine.array(vine.number()),
  })
)

export const updateBookValidator = vine.compile(
  vine.object({
    title: vine.string(),
    author: vine.string(),
    resume: vine.string(),
    cover: vine
      .file({
        size: '10mb',
        extnames: ['jpg', 'jpeg', 'webp', 'png'],
      })
      .nullable(),
    categories: vine.array(vine.number()),
  })
)
