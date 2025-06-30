import { z } from 'zod'

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Input is required' })
    .regex(/^[a-zA-Z\s]+$/, { message: 'Invalid format' }),
  contact: z
    .string()
    .regex(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, {
      //Ориентировано на российские мобильные + городские с кодом из 3 цифр (например, Москва).
      message: 'Invalid format',
    })
    .or(z.string().regex(/^@[a-zA-Z]\w{4,32}/, { message: 'Invalid format' })),
  email: z.string().email(),
  cover_letter: z.string().min(1, { message: 'Input is required' }),
  position: z.string().min(1, { message: 'Input is required' }),
})

export default formSchema
