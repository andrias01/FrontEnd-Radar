import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import type { DynamicFormField, DynamicFormSchema } from '../../types/data'
import { createZodResolver } from '../../utils/zodResolver'

interface DynamicFormProps {
  schema: DynamicFormSchema
  onSubmit: (values: Record<string, unknown>) => void
}

const buildValidationSchema = (fields: DynamicFormField[]) => {
  const shape: Record<string, z.ZodTypeAny> = {}

  fields.forEach((field) => {
    let validator: z.ZodTypeAny
    switch (field.type) {
      case 'number':
        validator = z
          .number({ invalid_type_error: 'Debe ser un número' })
          .or(z.string())
          .transform((value) => Number(value))
        break
      case 'date':
        validator = z.string().min(1, { message: 'Selecciona una fecha' })
        break
      case 'checkbox':
        validator = z.boolean().default(false)
        break
      case 'rating':
        validator = z
          .number({ invalid_type_error: 'Debe ser un número' })
          .or(z.string())
          .transform((value) => Number(value))
          .min(1)
          .max(5)
        break
      case 'multiselect':
        validator = z.array(z.string()).default([])
        break
      default:
        validator = z.string().min(1, { message: 'Campo obligatorio' })
    }

    if (!field.required) {
      validator = validator.optional()
    }

    shape[field.id] = validator
  })

  return z.object(shape)
}

export const DynamicForm = ({ schema, onSubmit }: DynamicFormProps): JSX.Element => {
  const validationSchema = buildValidationSchema(schema.fields)
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Record<string, unknown>>({ resolver: createZodResolver(validationSchema) })

  const renderField = (field: DynamicFormField) => {
    const commonProps = {
      id: field.id,
      className:
        'mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-[color:var(--color-primary)] focus:outline-none',
      placeholder: field.placeholder,
    }

    switch (field.type) {
      case 'select':
        return (
          <select {...register(field.id as string)} {...commonProps}>
            <option value="">Selecciona una opción</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      case 'multiselect':
        return (
          <Controller
            control={control}
            name={field.id as string}
            defaultValue={[]}
            render={({ field: controllerField }) => (
              <select
                multiple
                {...commonProps}
                value={(controllerField.value as string[]) ?? []}
                onChange={(event) =>
                  controllerField.onChange(Array.from(event.target.selectedOptions).map((option) => option.value))
                }
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          />
        )
      case 'checkbox':
        return (
          <Controller
            control={control}
            name={field.id as string}
            defaultValue={false}
            render={({ field: controllerField }) => (
              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" checked={Boolean(controllerField.value)} {...controllerField} />
                <span className="text-sm text-slate-600">{field.placeholder ?? 'Seleccionar'}</span>
              </div>
            )}
          />
        )
      case 'textarea':
        return <textarea rows={4} {...register(field.id as string)} {...commonProps} />
      case 'rating':
        return (
          <Controller
            control={control}
            name={field.id as string}
            defaultValue={3}
            render={({ field: controllerField }) => (
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    type="button"
                    key={value}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition ${
                      controllerField.value === value
                        ? 'border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white'
                        : 'border-slate-200 bg-white text-slate-500'
                    }`}
                    onClick={() => controllerField.onChange(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            )}
          />
        )
      default:
        return <input type={field.type === 'number' ? 'number' : 'text'} {...register(field.id as string)} {...commonProps} />
    }
  }

  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit(values))}
      className="space-y-6 rounded-3xl border border-white/60 bg-white p-8 shadow"
    >
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{schema.title}</h3>
        {schema.description && <p className="mt-2 text-sm text-slate-600">{schema.description}</p>}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {schema.fields.map((field) => (
          <div key={field.id} className="flex flex-col">
            <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">{field.label}</label>
            {renderField(field)}
            {errors[field.id as string] && (
              <span className="mt-1 text-xs text-red-500">
                {(errors[field.id as string]?.message as string) ?? 'Campo obligatorio'}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-end gap-3">
        <button
          type="reset"
          className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
        >
          Limpiar
        </button>
        <button
          type="submit"
          className="rounded-full bg-[color:var(--color-primary)] px-6 py-2 text-sm font-semibold text-white shadow hover:bg-[color:var(--color-primary-dark)]"
        >
          Guardar formulario
        </button>
      </div>
    </form>
  )
}
