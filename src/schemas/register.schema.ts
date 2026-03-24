import { optional, z } from 'zod';

export const registerSchema = z.object({
  firstName:z
    .string()
    .trim()
    .min(2, 'O nome deve conter no mínimo 2 caracteres'),
  lastName:z.string().min(2, 'Sobrenome muito curto').optional(),
  email:z
    .email('Email inválido ')
    .endsWith('@ifce.edu.br', 'Use seu email institucional').optional(),
  role:z.enum(['student', 'professor', 'technician']).optional(),
  campus:z.enum(['Tauá', 'Boa Viagem', 'Fortaleza', ]).optional(),
  password:z
    .string()
    .min(8, 'Minimo 8 caracteres')
    .regex(/[A-Za-z]/,'Precisa ter letras')
    .regex(/[0-9]/, 'Precisa ter numeros'),
})

export type RegisterFormData = z.infer<typeof registerSchema>
