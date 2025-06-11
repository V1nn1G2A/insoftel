import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, { message: 'Input is required.' }),
  phoneOrTelegram: z
    .string()
    .regex(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, {
      message: 'Invalid format.',
    })
    .or(z.string().regex(/^@[a-zA-Z]\w{4,32}/, { message: 'Invalid format.' })),
  email: z.string().email(),
  letter: z.string().min(1, { message: 'Input is required.' }),
})

export default formSchema
