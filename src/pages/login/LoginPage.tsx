import { Facebook, Github, Globe, ShieldAlert } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { SocialLoginButton } from '../../components/common/SocialLoginButton'
import { useAuth } from '../../context/AuthContext'
import { createZodResolver } from '../../utils/zodResolver'

const loginSchema = z.object({
  email: z.string().email({ message: 'Ingresa un correo válido' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export const LoginPage = (): JSX.Element => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: createZodResolver(loginSchema) })

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await login('manual', values)
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
      alert('No se pudo iniciar sesión con las credenciales ingresadas.')
    }
  }

  const handleProviderLogin = async (provider: 'google' | 'github' | 'facebook') => {
    try {
      await login(provider)
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
      alert('No se pudo iniciar sesión con el proveedor seleccionado.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-slate-100 to-[color:var(--color-neutral)] px-4 py-16">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl md:grid-cols-5">
        <div className="relative hidden bg-[color:var(--color-primary)]/90 p-10 text-white md:col-span-2 md:flex md:flex-col md:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
              <ShieldAlert className="h-4 w-4" />
              Seguridad profesional
            </span>
            <h2 className="text-2xl font-bold">Accede al ecosistema RADAR</h2>
            <p className="text-sm text-white/80">
              Conecta tus microservicios, gestiona evaluaciones empresariales y convierte los datos en decisiones estratégicas
              de talento.
            </p>
          </div>
          <div className="space-y-3 text-xs text-white/80">
            <p>Acceso diferenciado para Administradores y Coordinadores de instituciones.</p>
            <p>Auditoría completa y trazabilidad de formularios dinámicos.</p>
          </div>
        </div>
        <div className="p-10 md:col-span-3">
          <div className="mb-8 space-y-2 text-center md:text-left">
            <h1 className="text-3xl font-semibold text-slate-900">Bienvenido a RADAR</h1>
            <p className="text-sm text-slate-600">
              Inicia sesión con tu proveedor preferido o usa tus credenciales institucionales.
            </p>
          </div>
          <div className="grid gap-3">
            <SocialLoginButton icon={Globe} label="Continuar con Google" onClick={() => handleProviderLogin('google')} />
            <SocialLoginButton icon={Github} label="Continuar con GitHub" onClick={() => handleProviderLogin('github')} />
            <SocialLoginButton icon={Facebook} label="Continuar con Facebook" onClick={() => handleProviderLogin('facebook')} />
          </div>
          <div className="my-6 flex items-center gap-4 text-xs uppercase tracking-widest text-slate-400">
            <div className="h-px flex-1 bg-slate-200" />
            o con tu correo
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Correo</label>
              <input
                type="email"
                {...register('email')}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-[color:var(--color-primary)] focus:outline-none"
                placeholder="tu.correo@radar.edu"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Contraseña</label>
              <input
                type="password"
                {...register('password')}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-[color:var(--color-primary)] focus:outline-none"
                placeholder="••••••••"
              />
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[color:var(--color-primary-dark)] disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isSubmitting ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
