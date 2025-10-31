import { useMemo } from 'react'

import { mockDynamicForms } from '../services/mockData'
import type { DynamicFormSchema } from '../types/data'

export const useDynamicForm = (formId: string): DynamicFormSchema | undefined => {
  return useMemo(() => mockDynamicForms.find((form) => form.id === formId), [formId])
}
