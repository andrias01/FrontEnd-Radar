import type { Resolver } from 'react-hook-form'
import type { ZodType, ZodTypeDef } from 'zod'

export const createZodResolver = <TOutput, TDef extends ZodTypeDef, TInput>(schema: ZodType<TOutput, TDef, TInput>): Resolver => {
  return async (values) => {
    const result = await schema.safeParseAsync(values)

    if (result.success) {
      return {
        values: result.data,
        errors: {},
      }
    }

    const formErrors = result.error.issues.reduce<Record<string, any>>((allErrors, issue) => {
      const path = issue.path.join('.')
      allErrors[path] = {
        type: issue.code,
        message: issue.message,
      }
      return allErrors
    }, {})

    return {
      values: {},
      errors: formErrors,
    }
  }
}
