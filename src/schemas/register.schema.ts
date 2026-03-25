import { optional, z } from 'zod';

export const registerSchema = z.object({
  firstName:z
    .string()
    .trim()
    .min(2, 'O nome deve conter no mínimo 2 caracteres'),
  lastName:z.string().min(2, 'Sobrenome muito curto'),
  handle:z
    .string()
    .trim()
    .min(3, 'O nome de usuário deve conter no mínimo 3 caracteres')
    .regex(/^[a-zA-Z0-9_]+$/, 'O nome de usuário só pode conterletras, números e underscores'),
  email:z
    .email('Email inválido ')
    .endsWith('@ifce.edu.br', 'Use seu email institucional'),
  role:z.enum(['student', 'professor', 'technician']),
  campus:z.string().nonempty(),
  course: z.string().trim().min(3, 'O nome do curso deve conter no mínimo 3 caracteres').optional(),
  password:z
    .string()
    .min(8, 'Minimo 8 caracteres')
    .regex(/[A-Za-z]/,'Precisa ter letras')
    .regex(/[0-9]/, 'Precisa ter numeros'),
})

export type RegisterFormData = z.infer<typeof registerSchema>
