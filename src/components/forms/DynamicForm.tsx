import { useMemo, useState } from 'react'

import type { DynamicFormField, DynamicFormSchema } from '../../types/data'

interface DynamicFormProps {
  schema: DynamicFormSchema
  onSubmit: (values: Record<string, unknown>) => void
}

const buildInitialValues = (fields: DynamicFormField[]) => {
  const initial: Record<string, unknown> = {}
  fields.forEach((field) => {
    switch (field.type) {
      case 'checkbox':
        initial[field.id] = false
        break
      case 'multiselect':
        initial[field.id] = []
        break
      case 'rating':
        initial[field.id] = 3
        break
      default:
        initial[field.id] = ''
    }
  })
  return initial
}

const isEmptyValue = (field: DynamicFormField, value: unknown): boolean => {
  if (value === undefined || value === null) return true
  if (field.type === 'multiselect') {
    return Array.isArray(value) ? value.length === 0 : true
  }
  if (field.type === 'checkbox') {
    return value === false
  }
  const text = String(value).trim()
  return text.length === 0
}

const parseValue = (field: DynamicFormField, value: unknown) => {
  switch (field.type) {
    case 'number': {
      const numberValue = Number(value)
      if (Number.isNaN(numberValue)) {
        return { error: 'Debe ser un número', parsed: null }
      }
      return { parsed: numberValue }
    }
    case 'rating': {
      const ratingValue = Number(value)
      if (Number.isNaN(ratingValue)) {
        return { error: 'Selecciona una calificación válida', parsed: null }
      }
      if (ratingValue < 1 || ratingValue > 5) {
        return { error: 'La calificación debe estar entre 1 y 5', parsed: null }
      }
      return { parsed: ratingValue }
    }
    case 'checkbox':
      return { parsed: Boolean(value) }
    case 'multiselect':
      return { parsed: Array.isArray(value) ? value : [] }
    default:
      return { parsed: typeof value === 'string' ? value.trim() : value }
  }
}

export const DynamicForm = ({ schema, onSubmit }: DynamicFormProps): JSX.Element => {
  const initialValues = useMemo(() => buildInitialValues(schema.fields), [schema.fields])
  const [values, setValues] = useState<Record<string, unknown>>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const setValue = (id: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    const parsedValues: Record<string, unknown> = {}

    schema.fields.forEach((field) => {
      const rawValue = values[field.id]
      if (field.required && isEmptyValue(field, rawValue)) {
        nextErrors[field.id] = 'Campo obligatorio'
        return
      }

      if (!field.required && isEmptyValue(field, rawValue)) {
        parsedValues[field.id] = field.type === 'multiselect' ? [] : field.type === 'checkbox' ? false : ''
        return
      }

      const { error, parsed } = parseValue(field, rawValue)
      if (error) {
        nextErrors[field.id] = error
        return
      }
      parsedValues[field.id] = parsed
    })

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setErrors({})
    onSubmit(parsedValues)
  }

  const renderField = (field: DynamicFormField) => {
    const commonProps = {
      id: field.id,
      className:
        'mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-[color:var(--color-primary)] focus:outline-none dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200',
      placeholder: field.placeholder,
    }

    switch (field.type) {
      case 'select':
        return (
          <select
            {...commonProps}
            value={(values[field.id] as string) ?? ''}
            onChange={(event) => setValue(field.id, event.target.value)}
          >
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
          <select
            multiple
            {...commonProps}
            value={(values[field.id] as string[]) ?? []}
            onChange={(event) =>
              setValue(
                field.id,
                Array.from(event.target.selectedOptions).map((option) => option.value),
              )
            }
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      case 'checkbox':
        return (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={Boolean(values[field.id])}
              onChange={(event) => setValue(field.id, event.target.checked)}
            />
            <span className="text-sm text-slate-600 dark:text-slate-300">{field.placeholder ?? 'Seleccionar'}</span>
          </div>
        )
      case 'textarea':
        return (
          <textarea
            rows={4}
            {...commonProps}
            value={(values[field.id] as string) ?? ''}
            onChange={(event) => setValue(field.id, event.target.value)}
          />
        )
      case 'rating':
        return (
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                type="button"
                key={value}
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition ${
                  values[field.id] === value
                    ? 'border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white'
                    : 'border-slate-200 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
                }`}
                onClick={() => setValue(field.id, value)}
              >
                {value}
              </button>
            ))}
          </div>
        )
      default:
        return (
          <input
            type={field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text'}
            {...commonProps}
            value={(values[field.id] as string | number | undefined) ?? ''}
            onChange={(event) => setValue(field.id, event.target.value)}
          />
        )
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onReset={() => {
        setValues(initialValues)
        setErrors({})
      }}
      className="space-y-6 rounded-3xl border border-white/60 bg-white p-8 shadow dark:border-slate-800/60 dark:bg-slate-900/70"
    >
      <div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{schema.title}</h3>
        {schema.description && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{schema.description}</p>}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {schema.fields.map((field) => (
          <div key={field.id} className="flex flex-col">
            <label className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">{field.label}</label>
            {renderField(field)}
            {errors[field.id] && <span className="mt-1 text-xs text-red-500">{errors[field.id]}</span>}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-end gap-3">
        <button
          type="reset"
          className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] dark:border-slate-700 dark:text-slate-300"
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
